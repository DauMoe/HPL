const db = require('./db');
const crypto = require('crypto');
const reader = require('node-xlsx');
const { get } = require('http');

let rq, index, temp, body;
let list_session = new Map();
let easy_ques = {},
    medium_ques = {},
    hard_ques = {};

for (i of reader.parse(`${__dirname}/data/easy.xlsx`)[0].data) {
    easy_ques[`_${i[0]}`] = {
        id: i[0],
        ques: "\"" + i[1] + "\"",
        answer_a: "\"" + i[2] + "\"",
        answer_b: "\"" + i[3] + "\"",
        answer_c: "\"" + i[4] + "\"",
        answer_d: "\"" + i[5] + "\"",
        correct_ans: "\"" + i[6] + "\"",
        level: "\"0\""
    }
}

for (i of reader.parse(`${__dirname}/data/medium.xlsx`)[0].data) {
    medium_ques[`_${i[0]}`] = {
        id: i[0],
        ques: "\"" + i[1] + "\"",
        answer_a: "\"" + i[2] + "\"",
        answer_b: "\"" + i[3] + "\"",
        answer_c: "\"" + i[4] + "\"",
        answer_d: "\"" + i[5] + "\"",
        correct_ans: "\"" + i[6] + "\"",
        level: "\"1\""
    }
}

for (i of reader.parse(`${__dirname}/data/hard.xlsx`)[0].data) {
    hard_ques[`_${i[0]}`] = {
        id: i[0],
        ques: "\"" + i[1] + "\"",
        answer_a: "\"" + i[2] + "\"",
        answer_b: "\"" + i[3] + "\"",
        answer_c: "\"" + i[4] + "\"",
        answer_d: "\"" + i[5] + "\"",
        correct_ans: "\"" + i[6] + "\"",
        level: "\"2\""
    }
}

let easy_arr = Array.from(Array(Object.keys(easy_ques).length).keys());
let medium_arr = Array.from(Array(Object.keys(medium_ques).length).keys());
let hard_arr = Array.from(Array(Object.keys(hard_ques).length).keys());

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function gen_session(email, roles) {
    let ssid = crypto.randomBytes(16).toString("base64");
    list_session.set(email, {
        ssid: ssid,
        roles: roles,
        easy_id: Array.from(Array(Object.keys(easy_ques).length).keys()),
        medium_id: Array.from(Array(Object.keys(medium_ques).length).keys()),
        hard_id: Array.from(Array(Object.keys(hard_ques).length).keys())
    });
    return ssid;
}

let check_session = function(req, resp, next) {
    rq = req.body;
    console.log("========= CHECK SESSION ========");
    console.log(rq);
    if (!rq.ssid || rq.ssid.trim() == "") {
        resp.status(422);
        resp.json({ msg: "SessionID is required" });
        return;
    }

    if (!rq.email || rq.email.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Email is required" });
        return;
    }

    if (!list_session.has(rq.email)) {
        resp.status(401);
        resp.json({ msg: "User is not logined" });
        return;
    }

    if (list_session.get(rq.email).ssid != rq.ssid.trim()) {
        resp.status(498);
        resp.json({ msg: "Your session is expired" });
        return;
    }

    if (list_session.has(rq.email) && list_session.get(rq.email).ssid.toString() === rq.ssid.trim().toString()) {
        next();
    } else {
        resp.status(500);
        resp.json({ msg: "Unknow error" });
    }
};

let login = function(req, resp) {
    console.log("========= LOGIN ========");
    rq = req.body;
    if (!rq.email || rq.email.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Email is required" });
        return;
    }

    if (!rq.password || rq.password.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Password is required" });
        return;
    }

    db.login(rq.email, rq.password).then(function(res) {
        console.log("User " + res.msg[0].username + " logined");
        resp.status(200);
        resp.json({ "ssid": gen_session(rq.email, res.msg[0].roles), "username": res.msg[0].username, "roles": res.msg[0].roles });
    }).catch(function(err) {
        resp.status(404);
        resp.json({ msg: "Account is not exist!" });
    });
};

let logout = function(req, resp) {
    list_session.delete(req.email);
    resp.status(200);
    resp.json({ msg: "Logout success!" });
}

let signup = function(req, resp) {
    console.log("========= SIGNUP ========");
    rq = req.body;
    if (!rq.username || rq.username.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Username is required" });
        return;
    }

    if (!rq.email || rq.email.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Email is required" });
        return;
    }

    if (!rq.password || rq.password.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Password is required" });
        return;
    }

    if (!rq.dob || rq.dob.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Dob is required" });
        return;
    }

    if (!rq.sex || rq.sex.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Sex is required" });
        return;
    }

    if (!rq.roles || (Number(rq.roles) < 0 || Number(rq.roles) > 1)) {
        resp.status(422);
        resp.json({ msg: "Roles is required and roles only 0 or 1" });
        return;
    }

    //Create user
    db.signup(rq.email, rq.username, rq.password, rq.dob, rq.sex, rq.roles).then(function(res) {
        if (res.code == 200) {
            resp.status(200);
            resp.json({ msg: "insert ok" });
        }
    }).catch(err => {
        resp.status(err.code);
        resp.json({ msg: err.msg.sqlMessage });
    });
};

let get_ques = function(req, resp) {
    console.log("========= GET QUESTION ========");
    rq = req.body;
    console.log(rq);
    if (rq.level < -1) {
        resp.status(422);
        resp.json({ msg: "Level is required!" });
        return;
    }

    switch (Number(rq.level)) {
        case 0:
            //easy
            console.log("Level 0");
            index = Math.floor(Math.random() * list_session.get(rq.email).easy_id.length);
            list_session.get(rq.email).easy_id.splice(index, 1);
            if (list_session.get(rq.email).easy_id.length == 1) {
                temp = list_session.get(rq.email);
                temp.easy_id = Array.from(Array(Object.keys(easy_ques).length).keys())
                list_session.set(rq.email, temp);
            }
            resp.status(200);
            resp.json(easy_ques[`_${index}`]);
            break;
        case 1:
            //medium
            console.log("Level 1");
            index = Math.floor(Math.random() * list_session.get(rq.email).medium_id.length);
            list_session.get(rq.email).medium_id.splice(index, 1);
            if (list_session.get(rq.email).medium_id.length == 1) {
                temp = list_session.get(rq.email);
                temp.medium_id = Array.from(Array(Object.keys(medium_ques).length).keys())
                list_session.set(rq.email, temp);
            }
            resp.status(200);
            resp.json(medium_ques[`_${index}`]);
            break;
        case 2:
            //hard
            console.log("Level 2");
            index = Math.floor(Math.random() * list_session.get(rq.email).hard_id.length);
            list_session.get(rq.email).hard_id.splice(index, 1);
            if (list_session.get(rq.email).hard_id.length == 1) {
                temp = list_session.get(rq.email);
                temp.hard_id = Array.from(Array(Object.keys(hard_ques).length).keys())
                list_session.set(rq.email, temp);
            }
            resp.status(200);
            resp.json(hard_ques[`_${index}`]);
            break;
        default:
            resp.status(422);
            resp.json({ msg: "Level from 0-2" });
    }
};

let create_new_config = function(req, resp) {
    console.log("========= CREATE CONFIG ========");
    rq = req.body;
    if (!rq.name || rq.name.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Name is required!" });
        return;
    }
    if (!rq.easy || rq.easy.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Easy is required!" });
        return;
    }
    if (!rq.medium || rq.medium.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Medium is required!" });
        return;
    }
    if (!rq.hard || rq.hard.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Hard is required!" });
        return;
    }
    if (!rq.total || rq.total.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Total question is required!" });
        return;
    }
    db.create_new_config(rq.name, rq.easy, rq.medium, rq.hard, rq.total, rq.time)
        .then(function(res) {
            if (res.code == 200) {
                resp.status(200);
                resp.json({ msg: "create config success!" });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        });
}

let get_exam_config = function(req, resp) {
    rq = req.body;
    console.log("========= GET EXAM CONFIG ========");
    db.get_exam_config((rq.id) ? Number(rq.id) : -1)
        .then(function(res) {
            if (res.code == 200) {
                resp.status(200);
                for (i of res.msg) {
                    i.name = "\"" + i.name + "\"";
                }
                resp.json({
                    msg: res.msg
                });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        });
}

let update_exam_config = function(req, resp) {
    rq = req.body;
    console.log("========= UPDATE EXAM CONFIG ========");
    if (!rq.id || rq.id.trim() == "") {
        resp.status(422);
        resp.json({ msg: "ID is required!" });
        return;
    }
    if (!rq.name || rq.name.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Name is required!" });
        return;
    }
    if (!rq.easy || rq.easy.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Easy is required!" });
        return;
    }
    if (!rq.medium || rq.medium.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Medium is required!" });
        return;
    }
    if (!rq.hard || rq.hard.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Hard is required!" });
        return;
    }
    if (!rq.total || rq.total.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Total question is required!" });
        return;
    }
    if (isNaN(rq.time) || rq.time == null || rq.time < 0) {
        resp.status(422);
        resp.json({ msg: "Time is required!" });
        return;
    }
    db.update_exam_config(rq.id, rq.name, rq.easy, rq.medium, rq.hard, rq.total, rq.time)
        .then(function(res) {
            if (res.code == 200) {
                resp.status(200);
                resp.json({ msg: "Update success!" });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        })
}

let get_exam = function(req, resp) {
    rq = req.body;
    console.log("========= GET EXAM No." + rq.id + " ========");
    if (!rq.id || rq.id.trim() == "") {
        resp.status(422);
        resp.json({ msg: "ID is required!" });
        return;
    }
    db.get_exam_config(rq.id)
        .then(function(res) {
            if (res.code == 200) {
                temp = [];
                body = res.msg[0];

                temp1 = shuffle(easy_arr).slice(0, Number(body.total) * Number(body.easy / 100));
                for (i of temp1) {
                    temp.push(easy_ques[`_${i}`]);
                }

                temp1 = shuffle(medium_arr).slice(0, Number(body.total) * Number(body.medium / 100));
                for (i of temp1) {
                    temp.push(medium_ques[`_${i}`]);
                }

                temp1 = shuffle(hard_arr).slice(0, Number(body.total) * Number(body.hard / 100));
                for (i of temp1) {
                    temp.push(hard_ques[`_${i}`]);
                }
                resp.status(200);
                resp.json({
                    total: temp.length,
                    time: body.time_exam,
                    msg: shuffle(temp)
                });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        });
};

let create_result = function(req, resp) {
    console.log("========= RECORD RESULT ========");
    rq = req.body;
    if (!rq.result || rq.result.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Result is required!" });
        return;
    }
    if (!rq.start || rq.start.trim() == "") {
        resp.status(422);
        resp.json({ msg: "Start is required!" });
        return;
    }
    if (!rq.end || rq.end.trim() == "") {
        resp.status(422);
        resp.json({ msg: "End is required!" });
        return;
    }
    db.create_result(rq.email, rq.result, rq.start, rq.end)
        .then(function(res) {
            if (res.code == 200) {
                resp.status(200);
                resp.json({ msg: "Result recorded!" });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        });
};

let get_result = function(req, resp) {
    rq = req.body;
    console.log("========= GET RESULT ========");
    db.get_result((!rq.email) ? -1 : rq.email)
        .then(function(res) {
            if (res.code == 200) {
                resp.status(200);
                temp = [];
                for (i of res.msg) {
                    temp.push({
                        id: i.id,
                        email: "\"" + i.email + "\"",
                        result: "\"" + i.result + "\"",
                        starttime: "\"" + i.starttime + "\"",
                        endtime: "\"" + i.endtime + "\"",
                    });
                }
                resp.json({ msg: temp });
            }
        })
        .catch(function(err) {
            resp.status(err.code);
            resp.json({ msg: err.msg });
        })
};

let get_student = function (req, resp) {
    console.log("========= GET STUDENT ========");
    rq = req.body;
    db.get_student(rq.id? rq.id: -1)
    .then(function (res) {
        if (res.code == 200) {
            temp = [];
            for (i of res.msg) {
                temp.push({
                    id: i.id,
                    email: "\""+i.email+"\"",
                    username: "\""+i.username+"\"",
                    password: "\""+i.password+"\"",
                    dob: "\""+i.dob+"\"",
                    sex: "\""+i.sex+"\"",
                    roles: "\""+i.roles+"\""
                });
            }
            resp.status(200);
            resp.json({msg: temp, total: temp.length});
        }
    })
    .catch(function (err) {
        resp.status(err.code);
        resp.json({ msg: err.msg });
    })
};

let add_student = function (req, resp) {
    console.log("========= ADD STUDENT ========");
    rq = req.body;
    if (!rq.username || rq.username.length == 0) {
        resp.status(422);
        resp.json({ msg: "Username is required!" });
        return;
    }
    if (!rq.email_new || rq.email_new.length == 0) {
        resp.status(422);
        resp.json({ msg: "Email is required!" });
        return;
    }
    if (!rq.password || rq.password.length == 0) {
        resp.status(422);
        resp.json({ msg: "Password is required!" });
        return;
    }
    if (!rq.dob || rq.dob.length == 0) {
        resp.status(422);
        resp.json({ msg: "Dob is required!" });
        return;
    }
    if (!rq.sex || rq.sex.length == 0) {
        resp.status(422);
        resp.json({ msg: "Sex is required!" });
        return;
    }
    if (isNaN(rq.roles) || rq.roles == null || rq.roles < 0) {
        resp.status(422);
        resp.json({ msg: "Roles is required!" });
        return;
    }
    db.add_student(rq.email_new, rq.username, rq.password, rq.dob, rq.sex, rq.roles)
    .then(function (res) {
        resp.status(200);
        resp.json({msg: "Create Student Successful!"});
    })
    .catch(function (err) {
        resp.status(err.code);
        resp.json({ msg: err.msg });
    })
};

let update_student = function (req, resp) {
    console.log("========= UPDATE STUDENT ========");
    rq = req.body;
    if (!rq.username || rq.username.length == 0) {
        resp.status(422);
        resp.json({ msg: "Username is required!" });
        return;
    }
    if (!rq.email_new || rq.email_new.length == 0) {
        resp.status(422);
        resp.json({ msg: "Email is required!" });
        return;
    }
    if (!rq.password || rq.password.length == 0) {
        resp.status(422);
        resp.json({ msg: "Password is required!" });
        return;
    }
    if (!rq.dob || rq.dob.length == 0) {
        resp.status(422);
        resp.json({ msg: "Dob is required!" });
        return;
    }
    if (!rq.sex || rq.sex.length == 0) {
        resp.status(422);
        resp.json({ msg: "Sex is required!" });
        return;
    }
    if (isNaN(rq.roles) || rq.roles == null || rq.roles < 0) {
        resp.status(422);
        resp.json({ msg: "Roles is required!" });
        return;
    }
    if (isNaN(rq.id) || rq.id == null || rq.id < 0) {
        resp.status(422);
        resp.json({ msg: "ID is required!" });
        return;
    }
    
    db.update_student(rq.id, rq.email_new, rq.username, rq.password, rq.dob, rq.sex, rq.roles)
    .then(function (res) {
        resp.status(200);
        resp.json({msg: "Update Student Successful!"});
    })
    .catch(function (err) {
        resp.status(err.code);
        resp.json({ msg: err.msg });
    })
};

let delete_student = function (req, resp) {
    console.log("========= DELETE STUDENT ========");
    rq = req.body;
    if (isNaN(rq.id) || rq.id == null || rq.id < 0) {
        resp.status(422);
        resp.json({ msg: "ID is required!" });
        return;
    }
    db.delete_student(rq.id)
    .then(function (res) {
        resp.status(200);
        resp.json({msg: "Delete Student Successful!"});
    })
    .catch(function (err) {
        resp.status(err.code);
        resp.json({ msg: err.msg });
    });
};

let delete_exam_config = function(req, resp) {
    console.log("========= DELETE EXAM CONFIG ========");
    rq = req.body;
    if (isNaN(rq.id) || rq.id == null || rq.id < 0) {
        resp.status(422);
        resp.json({ msg: "ID is required!" });
        return;
    }
    db.delete_exam_config(rq.id)
    .then(function (res) {
        resp.status(200);
        resp.json({msg: "Delete exam config Successful!"});
    })
    .catch(function (err) {
        resp.status(err.code);
        resp.json({ msg: err.msg });
    });
}

module.exports = {
    check_session: check_session,
    login: login,
    logout: logout,
    signup: signup,
    get_ques: get_ques,
    create_new_config: create_new_config,
    get_exam_config: get_exam_config,
    update_exam_config: update_exam_config,
    get_exam: get_exam,
    create_result: create_result,
    get_result: get_result,
    get_student: get_student,
    add_student: add_student,
    update_student: update_student,
    delete_student: delete_student,
    delete_exam_config: delete_exam_config
};