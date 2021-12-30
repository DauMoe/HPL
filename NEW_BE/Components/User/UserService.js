const {getString, getNumber, CustomResp, SuccessResp, Con4Java} = require("./../Common");
const {LoginDAO, InsertUserDAO} = require("./UserDAO");

const Login = async(req, resp) => {
    let reqData = req.body;
    try {
        let email = getString(reqData, "email");
        let pass  = getString(reqData, "password");
        let result = await LoginDAO(email, pass);
        if (result.code === 200) {
            if (result.msg.length === 0) {
                CustomResp(resp, 201, [Con4Java("Email or password is invalid!")]);
                return;
            }
            let x = result.msg[0];
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

const Logout = async(req, resp) => {
    SuccessResp(resp, ["ok"]);
}

module.exports = {
    Login: Login,
    NewUser: NewUser,
    Logout: Logout
}