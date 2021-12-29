const {getString, getNumber, CustomResp, SuccessResp, Con4Java} = require("./../Common");
const {GetSingleQuestionByLevelDAO} = require("./QuestionDAO");

const GetSingleQuesByLevel = async(req, resp) => {
    let reqData = req.body;
    try {
        let level       = getNumber(reqData, "level");
        let result      = await GetSingleQuestionByLevelDAO(level);
        if (result.code === 200) {
            let i = result.message[0];
            SuccessResp(resp, [{
                "question": i.question === null ? "" : Con4Java(i.question),
                "question_path": i.question_path === null ? "" : Con4Java(i.question_path),
                "ans_a": i.ans_a === null ? "" : Con4Java(i.ans_a),
                "ans_b": i.ans_b === null ? "" : Con4Java(i.ans_b),
                "ans_c": i.ans_c === null ? "" : Con4Java(i.ans_c),
                "ans_d": i.ans_d === null ? "" : Con4Java(i.ans_d),
                "ans_a_path": i.ans_a_path === null ? "" : Con4Java(i.ans_a_path),
                "ans_b_path": i.ans_b_path === null ? "" : Con4Java(i.ans_b_path),
                "ans_c_path": i.ans_c_path === null ? "" : Con4Java(i.ans_c_path),
                "ans_d_path": i.ans_d_path === null ? "" : Con4Java(i.ans_d_path),
                "correct": i.correct_ans === null ? "" : Con4Java(i.correct_ans)
            }]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

module.exports = {
    GetSingleQuesByLevel: GetSingleQuesByLevel
}