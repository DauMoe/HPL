const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const handler = require('./handler');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// router.use(handler.check_session);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post(api.LOGIN, handler.login);
app.post(api.LOGOUT, router, handler.logout);
app.post(api.CREATE_USER, router, handler.signup);
app.post(api.GET_QUES, router, handler.get_ques);
app.post(api.CREATE_NEW_EXAM_CONFIG, router, handler.create_new_config);
app.post(api.UPDATE_EXAM_CONFIG, router, handler.update_exam_config);
app.post(api.GET_EXAM_CONFIG, router, handler.get_exam_config);
app.post(api.GET_EXAM, router, handler.get_exam);
app.post(api.CREATE_RESULT, router, handler.create_result);
app.post(api.GET_RESULT, router, handler.get_result)
app.post(api.GET_STUDENT, router, handler.get_student);
app.post(api.UPDATE_STUDENT, router, handler.update_student);
app.post(api.ADD_STUDENT, router, handler.add_student);
app.post(api.DELETE_STUDENT, router, handler.delete_student);
app.post(api.DELETE_EXAM, router, handler.delete_exam_config);

app.listen(PORT, function() {
    console.log("Listening at PORT: " + PORT);
})