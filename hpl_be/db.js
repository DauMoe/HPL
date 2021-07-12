const mysql = require('mysql');

const DB_CONFIG = {
    host: 'remotemysql.com',
    user: '6TvtGx4GMe',
    password: 'hRKdZaZPrS',
    database: '6TvtGx4GMe'
};

const LOCALHOST_DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpl'
};

let chooseDB = LOCALHOST_DB_CONFIG;

const conn = mysql.createConnection(chooseDB);

let sql = "";

(function init() {
    conn.connect(function(err) {
        if (err) throw err;
        else console.log("Connect to DB " + chooseDB.database + " success!");
    })
    conn.query("CREATE TABLE IF NOT EXISTS user (" +
        "id INT AUTO_INCREMENT PRIMARY KEY," +
        "email varchar(255) NOT NULL UNIQUE," +
        "username varchar(255)," +
        "password varchar(255)," +
        "dob varchar(255)," +
        "sex varchar(255)," +
        "roles int(10))",
        function(err, res) {
            if (err) throw err;
            else console.log("Create user successful");
        });

    conn.query("CREATE TABLE IF NOT EXISTS exam_result (" +
        "id INT AUTO_INCREMENT PRIMARY KEY," +
        "email varchar(255)," +
        "result varchar(255)," +
        "starttime varchar(255)," +
        "endtime varchar(255))",
        function(err, res) {
            if (err) {
                if (err.code == 1062) resolve({ code: 403, msg: "Account existed!" });
                else throw err;
            } else console.log("Create test_result successful");
        });

    conn.query("CREATE TABLE IF NOT EXISTS exam_config (" +
        "id INT AUTO_INCREMENT PRIMARY KEY," +
        "name varchar(255) NOT NULL UNIQUE," +
        "easy int(3)," +
        "medium int(3)," +
        "hard int(3)," +
        "total int(10)," +
        "time_exam int(4))",
        function(err, res) {
            if (err) {
                if (err.code == 1062) resolve({ code: 403, msg: "Account existed!" });
                else throw err;
            } else console.log("Create exam config successful");
        });
})();

let login = function(email, password) {
    sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [email, password], function(err, res) {
            if (err) {
                reject({ code: 400, msg: err });
            }
            resolve({ code: 200, msg: res });
        });
    });
}

let signup = function(email, username, password, dob, sex, roles) {
    sql = "INSERT INTO user (email, username, password, dob, sex, roles) VALUES (?,?,?,?,?,?)";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [email, username, password, dob, sex, roles], function(err, res) {
            if (err) {
                if (err.errno == 1062) {
                    reject({ code: 403, msg: err });
                } else {
                    reject({ code: 400, msg: err })
                }
            }
            resolve({ code: 200, msg: res });
        });
    });
}

let create_new_config = function(name, easy, medium, hard, total, time_exam) {
    sql = "INSERT INTO exam_config (name, easy, medium, hard, total, time_exam) VALUES (?, ?, ?, ?, ?, ?)";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [name, easy, medium, hard, total, time_exam], function(err, res) {
            if (err) {
                if (err.errno == 1062) {
                    reject({ code: 403, msg: err.sqlMessage });
                } else {
                    reject({ code: 400, msg: err })
                }
            } else resolve({ code: 200, msg: res });
        });
    });
}

let get_exam_config = function(id = -1) {
    if (id == -1) {
        //Get all config
        sql = "SELECT * FROM exam_config";
    } else {
        sql = "SELECT * FROM exam_config WHERE id=?";
    }
    return new Promise(function(resolve, reject) {
        conn.query(sql, [id], function(err, res) {
            if (err) reject({ code: 400, msg: err });
            else resolve({ code: 200, msg: res });
        });
    });

}

let update_exam_config = function(id, name, easy, medium, hard, total, time_exam) {
    sql = "UPDATE exam_config SET name=?, easy=?, medium=?, hard=?, total=?, time_exam=? WHERE id=?";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [name, easy, medium, hard, total, time_exam, id], function(err, res) {
            if (err)
                reject({ code: 400, msg: err });
            else
                resolve({ code: 200, msg: res });
        });
    });

}

let delete_exam_config = function(id) {
    sql = "DELETE FROM exam_config WHERE id=?";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [id], function(err, res) {
            if (err)
                reject({ code: 400, msg: err });
            else
                resolve({ code: 200, msg: res });
        });
    });
}

let create_result = function(email, result, start, end) {
    sql = "INSERT INTO exam_result (email, result, starttime, endtime) VALUES (?, ?, ?, ?)";
    return new Promise(function(resolve, reject) {
        conn.query(sql, [email, result, start, end], function(err, res) {
            if (err)
                reject({ code: 400, msg: err });
            else
                resolve({ code: 200, msg: res });
        });
    });
}

let get_result = function(email = -1) {
    if (email == -1) {
        sql = "SELECT * FROM exam_result";
    } else {
        sql = "SELECT * FROM exam_result WHERE email=?";
    }

    return new Promise(function(resolve, reject) {
        conn.query(sql, [email], function(err, res) {
            if (err)
                reject({ code: 400, msg: err });
            else
                resolve({ code: 200, msg: res });
        });
    });
}

let get_student = function (id = -1) {
    if (id == -1) {
        sql = "SELECT * FROM user WHERE roles = 0";
    } else {
        sql = "SELECT * FROM user WHERE roles = 0 AND id = ?";
    }
    return new Promise(function(resolve, reject) {
        conn.query(sql, [id], function (err, res) {
            if (err)
                reject({code: 400, msg: err})
            else {
                console.log(res);
                resolve({code: 200, msg: res});
            }
        });
    });
}

let update_student = function (id, email, username, password, dob, sex, roles) {
    sql = "UPDATE user SET email=?, username=?, password=?, dob=?, sex=?, roles=? WHERE id = ?";
    return new Promise(function (resolve, reject) {
        conn.query(sql, [email, username, password, dob, sex, roles, id], function (err, res) {
            if (err)
                reject({code: 400, msg: err});
            else 
            resolve({code: 200, msg: "Update success!"});
        });
    });
}

let add_student = function (email, username, password, dob, sex, roles) {
    sql = "INSERT INTO user (email, username, password, dob, sex, roles) VALUES (?, ?, ?, ?, ? ,?)";
    return new Promise(function (resolve, reject) {
        conn.query(sql, [email, username, password, dob, sex, roles], function (err, res) {
            if (err)
                reject({code: 400, msg: err});
            else 
                resolve({code: 200, msg: "Create student success!"});
        });
    });
}

let delete_student = function (id) {
    sql = "DELETE FROM user WHERE id = ?";
    return new Promise(function (resolve, reject) {
        conn.query(sql, [id], function (err, res) {
            if (err)
                reject({code: 400, msg: err});
            else
                resolve({code: 200, msg: "Delete successful!"});
        });
    });
}

module.exports = {
    login: login,
    signup: signup,
    create_new_config: create_new_config,
    get_exam_config: get_exam_config,
    update_exam_config: update_exam_config,
    delete_exam_config: delete_exam_config,
    create_result: create_result,
    get_result: get_result,
    get_student: get_student,
    update_student: update_student,
    add_student: add_student,
    delete_student: delete_student
}