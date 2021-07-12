import React from 'react';
import './login.css';
import loading from "./../../images/loading.svg";
import { Redirect } from 'react-router';
import api from '../api';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            logined: false
        };
        this.handlerValue   = this.handlerValue.bind(this);
        this.login          = this.login.bind(this);
    }

    handlerValue(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    login(event) {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", this.state.email);
        urlencoded.append("password", this.state.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(api.LOGIN, requestOptions)
        .then(response => {
            console.log(response.status);
            if (response.status === 422) {
                alert("Fill all field!");
                throw Error("");
            }
            if (response.status === 404) {
                alert("Account is not existed!");
                throw Error(response.status);
            }
            return response.json();
        })
        .then(result => {
            this.setState({logined: true});
            localStorage.setItem("ssid", result.ssid);
            localStorage.setItem("username", result.username);
            localStorage.setItem("roles", result.roles);
            localStorage.setItem("email", this.state.email);  
            window.location.reload(); 
        })
        .catch(error => {
            console.log("Error");
        });
    }

    render() {
        return(
            <div className="login_container">
                <div className="loading_container">
                    <img width="100%" className="loadingLogo" src={loading} />
                </div>
                <div className="login_form">
                    <form className="login_form-container" onSubmit={this.login}>
                        <input className="form-control" value={this.state.email} name="email" placeholder="Email" type="text" onChange={this.handlerValue} />
                        <input className="form-control margin-top-20" value={this.state.password} name="password" placeholder="Password" type="password" onChange={this.handlerValue} />
                        <input type="submit" className="btn-login margin-top-30" value="Login"/>
                    </form>
                </div>
            </div>
        );
    }
}