const Common = {
    getString: (data, field, isRequired = true) => {
        if (!data.hasOwnProperty(field) && isRequired) {
            throw Error(`'${field}' is required!`);
        }
        if (!data.hasOwnProperty(field) && !isRequired) return "";
        if (data.hasOwnProperty(field)) return data["" + field];
    },

    getNumber: (data, field, isRequired = true) => {
        if (!data.hasOwnProperty(field) && isRequired) {
            throw Error(`'${field}' is required!`);
        }
        if (!data.hasOwnProperty(field) && !isRequired) return null;
        if (data.hasOwnProperty(field)) {
            if (isNaN(Number.parseFloat(data["" + field]))) {
                throw Error(`'${field}' must be a number!`);
            } else {
                return Number.parseFloat(data["" + field]);
            }
        }
    },

    CustomResp: (resp, code, msg) => {
        // resp.statusCode(200);
        resp.json({
            code: code,
            msg: msg
        });
    },

    SuccessResp: (resp, msg) => {
        Common.CustomResp(resp, 200 , msg);
    },

    Con4Java: (msg) => {
        return "\""+msg+"\"";
    },

    HandleResp: (err, resp, reject, resolve) => {
        if (err) {
            reject({
                code: 900,
                message: err.message
            })
        } else {
            resolve({
                code: 200,
                message: resp
            })
        }
    }
}

module.exports = Common;