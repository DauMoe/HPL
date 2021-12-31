const {getString, getNumber, CustomResp, SuccessResp, Con4Java} = require("./../Common");
const {GetRandomStructureDAO, SearchStructureDAO, GetDetailStructureDAO} = require("./PracticeDAO");

const GetRandomStructure = async(req, resp) => {
    let reqData = req.body;
    try {
        let result = await GetRandomStructureDAO();
        if (result.code === 200) {
            let i = result.message[0];
            i.name_struct = Con4Java(i.name_struct);
            i.struct_eng = Con4Java(i.struct_eng);
            i.mean_exam = Con4Java(i.mean_exam);
            SuccessResp(resp, [i]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const SearchStructure = async(req, resp) => {
    let reqData = req.body;
    try {
        let q = getString(reqData, "q");
        let result = await SearchStructureDAO(q);
        if (result.code === 200) {
            for (let i of result.message) {
                i.name_struct = Con4Java(i.name_struct);
                // i.struct_eng = Con4Java(i.struct_eng);
                // i.mean_exam = Con4Java(i.mean_exam);
            }
            SuccessResp(resp, result.message);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

const GetDetailStructure = async(req, resp) => {
    let reqData = req.body;
    try {
        let structure_id = getString(reqData, "id");
        let result = await GetDetailStructureDAO(structure_id);
        if (result.code === 200) {
            let i = result.message[0];
            i.name_struct = Con4Java(i.name_struct);
            i.struct_eng = Con4Java(i.struct_eng);
            i.mean_exam = Con4Java(i.mean_exam);
            SuccessResp(resp, [i]);
        } else {
            CustomResp(resp, result.code, [Con4Java(result.message)]);
        }
    } catch (e) {
        CustomResp(resp, 900, [Con4Java(e.message)]);
    }
}

module.exports = {
    GetRandomStructure: GetRandomStructure,
    SearchStructure: SearchStructure,
    GetDetailStructure: GetDetailStructure
}