import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import Login from "./components/Login/index";
import Result from "./components/Result";
import NotFound from "./components/NotFound/index";
import PrivateRoute from "./components/PrivateRoute";
import AddStudent from "./components/Students/add_student";
import ManagerStudents from "./components/Students/manager_students";
import ExamConfigManager from "./components/Exam/exam_manager";
import AddExam from "./components/Exam/add_exam";
import Header from "./components/Header";
//Redirect: https://reactrouter.com/web/api/Redirect


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          {(localStorage.getItem("ssid") ? <Redirect to="/result"/> : <Login/>)}
        </Route>
        <PrivateRoute path="/result" component={Result}/>
        <PrivateRoute path="/add_student" component={AddStudent}/>
        <PrivateRoute path="/edit_student?id=:id" exact component={AddStudent}/>
        <PrivateRoute path="/student_manager" component={ManagerStudents}/>
        <PrivateRoute path="/exam_manager" component={ExamConfigManager}/>
        <PrivateRoute path="/edit_exam?id=:id" exact component={AddExam}/>
        <PrivateRoute path="/add_exam" exact component={AddExam}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
