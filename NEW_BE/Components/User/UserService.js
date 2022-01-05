const {getString, getNumber, CustomResp, SuccessResp, Con4Java} = require("./../Common");
const {LoginDAO, InsertUserDAO, GetListStudentDAO} = require("./UserDAO");

const Login = async(req, resp) => {
    let reqData = req.body;
    try {
        let email = getString(reqData, "email");
        let pass  = getString(reqData, "password");
        let result = await LoginDAO(email, pass);
        if (result.code === 200) {
            if (result.message.length === 0) {
                CustomResp(resp, 201, [Con4Java("Email or password is invalid!")]);
                return;
            }
            let x = result.message[0];
            delete x.password;
            SuccessResp(resp, [{
                "id": x.id,
                "email": Con4Java(x.email),
                "username": Con4Java(x.username),
                "dob": Con4Java(x.dob),
                "roles": x.roles
            }]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const NewUser = async(req, resp) => {
    let reqData = req.body;
    try {
        let email       = getString(reqData, "email");
        let username    = getString(reqData, "username");
        let dob         = getString(reqData, "dob", false);
        let sex         = getString(reqData, "sex", false);
        let roles       = getString(reqData, "roles");
        let result      = await InsertUserDAO(email, username, dob, sex, roles);
        if (result.code === 200) {
            SuccessResp(resp, [Con4Java("Thành công")]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const GetStudent = async (req, resp) => {
    try {
        let result = await GetListStudentDAO();
        if (result.code === 200) {
            let respResult = [];
            for (let i of result.message) {
                respResult.push({
                    "email": Con4Java(i.email),
                    "id": i.id,
                    "username": Con4Java(i.username),
                    "dob": Con4Java(i.dob),
                    "sex": Con4Java(i.sex),
                    "roles": i.roles
                });
            }
            SuccessResp(resp, respResult);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch(e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const Logout = async(req, resp) => {
    SuccessResp(resp, ["ok"]);
}

module.exports = {
    Login: Login,
    NewUser: NewUser,
    Logout: Logout,
    GetStudent: GetStudent
}