import React from 'react';
import { Redirect } from 'react-router';
import api from '../api';
import './student.css';

export default class AddStudent extends React.Component {
    constructor(props) {
        super (props);
        this.create_new = this.create_new.bind(this);
        this.state = {
            email: "",
            username: "",
            password: "",
            cfpw: "",
            dob: "",
            sex: "male",
            roles: "0",
            err: false,
            createOK: false,
            isedit: false
        };
        this.handlerValue = this.handlerValue.bind(this);
        this.getStudentInfo = this.getStudentInfo.bind(this);
        if (props.location.pathname.indexOf("id") > -1) {
            this.id = props.location.pathname.slice(props.location.pathname.indexOf("id")+3)
        } else {
            this.id = null
        }
    }

    componentDidMount() {
        if (!isNaN(Number(this.id)) && this.id !== null) {
            this.getStudentInfo(this.id);
            this.setState({isedit: true});
        } else {
            this.setState({
                email: "",
                username: "",
                password: "",
                cfpw: "",
                dob: "",
                sex: "male",
                roles: "0",
                err: false,
                createOK: false,
                isedit: false
            });
        }
    }

    handlerValue(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    create_new(event) {
        event.preventDefault();
        if (
                this.state.email.trim()     == "" 
            ||  this.state.password.trim()  == ""
            ||  (this.state.cfpw.trim()      == "" && this.id === null)
            ||  this.state.username.trim()  == ""
            ||  this.state.dob.trim()       == ""
            ||  this.state.sex.trim()       == ""
            ||  this.state.roles.trim()     == ""
        ) {
            this.setState({err: true});
            return;
        } else {
            this.setState({err: false});
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("ssid", localStorage.getItem("ssid"));
        urlencoded.append("email", localStorage.getItem("email"));
        urlencoded.append("email_new", this.state.email);
        urlencoded.append("username", this.state.username);
        urlencoded.append("password", this.state.password);
        urlencoded.append("dob", this.state.dob);
        urlencoded.append("sex", this.state.sex);
        urlencoded.append("roles", this.state.roles);
        if (this.id !== null) {
            urlencoded.append("id", this.id);
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        if (this.id !== null) {
            fetch(api.UPDATE_STUDENT, requestOptions)
            .then(response => {
                if (response.status != 200) {
                    if (response.status == 400) {
                        alert("Email is existed!");
                    }
                    throw Error();
                }
                else this.setState({createOK: true});
                return response.json();
            })
            .catch(error => console.log('error', error));
        } else {
            fetch(api.ADD_STUDENT, requestOptions)
            .then(response => {
                if (response.status != 200) {
                    if (response.status == 400) {
                        alert("Email is existed!");
                    }
                    throw Error();
                }
                else this.setState({createOK: true});
                return response.json();
            })
            .catch(error => console.log('error', error));
        }
    }

    getStudentInfo(id) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("ssid", localStorage.getItem("ssid"));
        urlencoded.append("email", localStorage.getItem("email"));
        urlencoded.append("id", id);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(api.GET_STUDENT, requestOptions)
        .then(response => {
            if (response.status !== 200) {
                // if (response.status === 403) {
                //     alert("Name \""+this.state.name+"\" existed!");
                // }
                throw Error();
            }
            return response.json();
        })
        .then(result => {
            this.setState({
                email: result.msg[0].email.replace(/\"/g, ''),
                username: result.msg[0].username.replace(/\"/g, ''),
                password: result.msg[0].password.replace(/\"/g, ''),
                dob: result.msg[0].dob.replace(/\"/g, ''),
                sex: result.msg[0].sex.replace(/\"/g, ''),
                roles: result.msg[0].roles.replace(/\"/g, '')
            });
        })
        .catch(error => console.log('error', error));
    }

    render() {
        if (this.state.createOK){
            return <Redirect exact to="/student_manager"/>
        }
        return(
            <div>
                <h2>{(this.id !== null) ? "Edit student:": "Add studdent:"} </h2>
                <form action="#" className="add_student_form-container" onSubmit={this.create_new}>
                    <small style={{color: 'red', display: (this.state.err) ? 'inline':'none'}}>* Fill all fields!</small><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Email" name="email" value={this.state.email}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Username" name="username" value={this.state.username}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Password" type="password" name="password" value={this.state.password}/><br/>
                    <input className="form-control margin-top-20" style={{display: (this.id !== null) ? 'none':'inline'}} onChange={this.handlerValue} placeholder="Confirm Password" type="password" name="cfpw" value={this.state.cfpw}/><br style={{display: (this.id !== null) ? 'none':'inline'}}/>
                    <span style={{color: 'red', display: (this.state.password == this.state.cfpw || this.id!==null) ? 'none':'inline'}}>* Password is not match!<br/></span>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Date of birth" type="date" name="dob" value={this.state.dob}/><br/>
                    <select className="form-control margin-top-20" onChange={this.handlerValue} style={{width: '346px'}} name="sex" value={this.state.sex}>
                        <option value="male" defaultValue>Male</option>
                        <option value="female">Female</option>
                    </select><br/>
                    <select className="form-control margin-top-20" onChange={this.handlerValue} style={{width: '346px'}} name="roles" value={this.state.roles}>
                        <option value="0" defaultValue>Student</option>
                        <option value="1">Admin</option>
                    </select><br/>
                    <button className="btn-o margin-top-20" style={{width: '100%', backgroundColor: '#1aa2a2', borderRadius: '8px'}} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}