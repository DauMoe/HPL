const {DB_CONFIG} = require("../DB_CONFIG");
const {HandleResp} = require("./../Common");

const mysql = require("mysql");
const conn = mysql.createConnection(DB_CONFIG);

const LoginDAO = async (email, password) => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM user WHERE email = ? AND password = ?";
        conn.query(sql, [email, password], function (err, resp) {
            HandleResp(err, resp, reject, resolve)
        });
    });
}

const InsertUserDAO = async(email, username, dob, sex, roles) => {
    return new Promise(function (resolve, reject) {
        let sql = "INSERT INTO user (email, username, password, dob, sex, roles) VALUES (?, ?, '123', ?, ?, ?)";
        conn.query(sql, [email, username, dob, sex, roles], function (err, resp) {
            HandleResp(err, resp, reject, resolve)
        });
    });
}

const GetListStudentDAO = async() => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM user WHERE roles = 0";
        conn.query(sql, [], function (err, resp) {
            HandleResp(err, resp, reject, resolve)
        });
    });
}

module.exports = {
    LoginDAO: LoginDAO,
    InsertUserDAO: InsertUserDAO,
    GetListStudentDAO: GetListStudentDAO
}