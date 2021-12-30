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

const CreateExamByConfigDAO = (exam_id, callback) => {
    let sql = "SELECT * FROM config_exam WHERE id = ?";
    conn.query(sql, [exam_id], async function (err, resp) {
        if (resp.length > 0) {
            let EasyPromise = new Promise(function (resolve, reject) {
                conn.query("SELECT * FROM question_eng WHERE level = 1 ORDER BY RAND() LIMIT ?", [resp[0].num_easy], function (err, resp) {
                    HandleResp(err, resp, reject, resolve);
                });
            });
            let MediumPromise = new Promise(function (resolve, reject) {
                conn.query("SELECT * FROM question_eng WHERE level = 2 ORDER BY RAND() LIMIT ?", [resp[0].num_medium], function (err, resp) {
                    HandleResp(err, resp, reject, resolve);
                });
            });
            let HardPromise = new Promise(function (resolve, reject) {
                conn.query("SELECT * FROM question_eng WHERE level = 3 ORDER BY RAND() LIMIT ?", [resp[0].num_hard], function (err, resp) {
                    HandleResp(err, resp, reject, resolve);
                });
            });

            let result = await Promise.all([EasyPromise, MediumPromise, HardPromise]);
            let ListQues = [];
            for (let i of result) {
                ListQues = [...ListQues, ...i.message];
            }
            console.log("DAO: " + ListQues.length);
            callback({
                code: 200,
                message: ListQues
            });
        } else {
            callback({
                code: 900,
                message: `Không có cấu hình bài thi ID = ${exam_id}`
            })
        }
    });
}

const GetExamConfigDAO = async() => {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM config_exam";
        conn.query(sql, [], function (err, resp) {
            HandleResp(err, resp, reject, resolve)
        });
    });
}

const GetExamResultDAO = (email, callback) => {
    conn.query("SELECT roles FROM user WHERE email = ? LIMIT 1", [email], function (err, resp) {
       if (err) {
           callback({
               code: 900,
               message: err
           })
       } else {
           let sql, BindingValueArr = [];
           if (resp[0].roles === 1) {
               sql = "SELECT * FROM exam_result";
           } else {
               sql = "SELECT * FROM exam_result WHERE email = ?";
               BindingValueArr = [email]
           }
           conn.query(sql, BindingValueArr, function (err1, resp1) {
               if (err1) {
                   callback({
                       code: 900,
                       message: err1
                   })
               } else {
                   callback({
                       code: 200,
                       message: resp1
                   })
               }
           });
       }
    });
}

const NewResultDAO = async(email, result, starttime, endtime) => {
    let sql = "INSERT INTO exam_result (email, result, starttime, endtime) VALUES (?,?,?,?)";
    return new Promise(function (resolve, reject) {
       conn.query(sql, [email, result, starttime, endtime], function (err, resp) {
           HandleResp(err, resp, reject, resolve);
       })
    });
}

module.exports = {
    GetSingleQuestionByLevelDAO: GetSingleQuestionByLevelDAO,
    CreateExamByConfigDAO: CreateExamByConfigDAO,
    GetExamConfigDAO: GetExamConfigDAO,
    GetExamResultDAO: GetExamResultDAO,
    NewResultDAO: NewResultDAO
}