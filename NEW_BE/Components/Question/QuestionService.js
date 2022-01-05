const {getString, getNumber, CustomResp, SuccessResp, Con4Java} = require("./../Common");
const {GetSingleQuestionByLevelDAO, CreateExamByConfigDAO, GetExamConfigDAO, GetExamResultDAO, NewResultDAO} = require("./QuestionDAO");

const GetSingleQuesByLevel = async(req, resp) => {
    let reqData = req.body;
    try {
        let level       = getNumber(reqData, "level");
        let result      = await GetSingleQuestionByLevelDAO(level);
        if (result.code === 200) {
            let i = result.message[0];
            SuccessResp(resp, [{
                "question": i.question === null ? Con4Java("Audio question. Please listen audio and choose the correct answer") : Con4Java(i.question),
                "question_path": i.question_path === null ? Con4Java("") : Con4Java(i.question_path),
                "ans_a": i.ans_a === null ? Con4Java("") : Con4Java(i.ans_a),
                "ans_b": i.ans_b === null ? Con4Java("") : Con4Java(i.ans_b),
                "ans_c": i.ans_c === null ? Con4Java("") : Con4Java(i.ans_c),
                "ans_d": i.ans_d === null ? Con4Java("") : Con4Java(i.ans_d),
                "ans_path": i.ans_path === null ? Con4Java("") : Con4Java(i.ans_path),
                "correct": i.correct_ans === null ? Con4Java(""): Con4Java(i.correct_ans)
            }]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const CreateExamByConfig = (req, resp) => {
    let reqData = req.body;
    try {
        let ExamConfigID        = getNumber(reqData, "id");
        CreateExamByConfigDAO(ExamConfigID, function (result) {
            if (result.code === 200) {
                let ListResp = [];
                // console.log("Service: " + result.message.length);
                for (let i of result.message) {
                    ListResp.push({
                        "question": i.question === null ? Con4Java("Listen audio and choose correct answer") : Con4Java(i.question),
                        "question_path": i.question_path === null ? Con4Java("") : Con4Java(i.question_path),
                        "ans_a": i.ans_a === null ? Con4Java("") : Con4Java(i.ans_a),
                        "ans_b": i.ans_b === null ? Con4Java("") : Con4Java(i.ans_b),
                        "ans_c": i.ans_c === null ? Con4Java("") : Con4Java(i.ans_c),
                        "ans_d": i.ans_d === null ? Con4Java("") : Con4Java(i.ans_d),
                        "ans_path": i.ans_path === null ? Con4Java("") : Con4Java(i.ans_path),
                        "correct": i.correct_ans === null ? Con4Java(""): Con4Java(i.correct_ans)
                    });
                }
                resp.status(200);
                resp.json({
                    code: 200,
                    msg: ListResp,
                    total: ListResp.length
                });
            } else {
                CustomResp(resp, result.code, [Con4Java(result.message)]);
            }
        });
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const GetExamConfig = async (req, resp) => {
    try {
        let result = await GetExamConfigDAO();
        if (result.code === 200) {
            for (let i of result.message) {
                i.name = Con4Java(i.name);
            }
            SuccessResp(resp, result.message);
        } else {
            CustomResp(resp, result.code, result.message);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const GetResultExam = async(req, resp) => {
    let reqData = req.body;
    try {
        let email = getString(reqData, "email");
        GetExamResultDAO(email, function (result) {
            if (result.code === 200) {
                for (let i of result.message) {
                    i.email = Con4Java(i.email);
                    i.result = Con4Java(i.result);
                    i.starttime = Con4Java(i.starttime);
                    i.endtime = Con4Java(i.endtime)
                }
                SuccessResp(resp, result.message);
            } else {
                CustomResp(resp, result.code, result.message);
            }
        });
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const NewResult = async (req, resp) => {
    let reqData = req.body;
    try {
        let email = getString(reqData, "email");
        let result = getString(reqData, "result");
        let starttime = getString(reqData, "starttime");
        let endtime = getString(reqData, "endtime");

        let response = await NewResultDAO(email, result, starttime, endtime);

        if (response.code === 200) {
            SuccessResp(resp, [Con4Java("ok")]);
        } else {
            CustomResp(resp, response.code, [Con4Java(response.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

module.exports = {
    GetSingleQuesByLevel: GetSingleQuesByLevel,
    CreateExamByConfig: CreateExamByConfig,
    GetExamConfig: GetExamConfig,
    GetResultExam: GetResultExam,
    NewResult: NewResult
}