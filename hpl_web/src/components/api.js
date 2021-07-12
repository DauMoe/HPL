// const BASE_URL = "http://localhost:8080/";
const BASE_URL = "/";

export default {
    LOGIN: BASE_URL+'api/login',
    LOGOUT: BASE_URL+'api/logout',
    CREATE_USER: BASE_URL+'api/new_user',
    GET_QUES: BASE_URL+'api/get_ques',
    GET_EXAM_CONFIG: BASE_URL+'api/get_exam_config',
    CREATE_NEW_EXAM_CONFIG: BASE_URL+'api/create_new_config',
    UPDATE_EXAM_CONFIG: BASE_URL+'api/update_config',
    GET_EXAM: BASE_URL+'api/exam',
    CREATE_RESULT: BASE_URL+'api/create_result',
    GET_RESULT: BASE_URL+'api/get_result',
    GET_STUDENT: BASE_URL+'api/get_student',
    UPDATE_STUDENT: BASE_URL+'api/update_student',
    ADD_STUDENT: BASE_URL+'api/add_student',
    DELETE_STUDENT: BASE_URL+'api/delete_student',
    DELETE_EXAM: BASE_URL+'api/delete_exam'
}