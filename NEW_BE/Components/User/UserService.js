const {getString, getNumber, CustomResp, SuccessResp} = require("./../Common");

const Login = async(req, resp) => {
    let reqData = req.body;
    try {
        let email = getString(reqData, "email");
    } catch (e) {
        CustomResp(resp, 900, e.message);
    }
}

module.exports = {
    Login: Login
}