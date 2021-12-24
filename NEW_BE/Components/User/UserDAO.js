import {DB_CONFIG} from "../DB_CONFIG";

const mysql = require("mysql");
const conn = mysql.createConnection(DB_CONFIG);

export const LoginDAO = async (email, password) => {
    let sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    return conn.query(sql, [email, password]);
}

export const GetQuestionDAO = async() => {
    
}