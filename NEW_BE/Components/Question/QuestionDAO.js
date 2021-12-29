const {DB_CONFIG} = require("../DB_CONFIG");
const {HandleResp} = require("./../Common");

const mysql = require("mysql");
const conn = mysql.createConnection(DB_CONFIG);

const GetSingleQuestionByLevelDAO = async (level) => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM question_eng WHERE level = ? ORDER BY RAND() LIMIT 1";
        conn.query(sql, [level], function (err, resp) {
            HandleResp(err, resp, reject, resolve)
        });
    });
}

module.exports = {
    GetSingleQuestionByLevelDAO: GetSingleQuestionByLevelDAO
}