const {DB_CONFIG} = require("../DB_CONFIG");
const {HandleResp} = require("./../Common");

const mysql = require("mysql");
const conn = mysql.createConnection(DB_CONFIG);

const GetAllStructureDAO = async() => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT id, name_struct FROM structure_english";
        conn.query(sql, [], function (err, resp) {
            HandleResp(err, resp, reject, resolve);
        })
    });
}

const SearchStructureDAO = async(q) => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT id, name_struct FROM structure_english WHERE name_struct LIKE ?";
        conn.query(sql, ['%'+q+'%'], function (err, resp) {
            HandleResp(err, resp, reject, resolve);
        })
    });
}

const GetRandomStructureDAO = async () => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM structure_english ORDER BY RAND() LIMIT 1";
        conn.query(sql, [], function (err, resp) {
            HandleResp(err, resp, reject, resolve);
        });
    });
}

const GetDetailStructureDAO = async (id) => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM structure_english WHERE id = ? LIMIT 1";
        conn.query(sql, [id], function (err, resp) {
            HandleResp(err, resp, reject, resolve);
        })
    });
}

module.exports = {
    SearchStructureDAO: SearchStructureDAO,
    GetRandomStructureDAO: GetRandomStructureDAO,
    GetDetailStructureDAO: GetDetailStructureDAO,
    GetAllStructureDAO: GetAllStructureDAO
}