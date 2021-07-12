import React from 'react';
import { Link, Redirect } from "react-router-dom";
import api from '../api';
import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logouted: false
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", localStorage.getItem("email"));
        urlencoded.append("ssid", localStorage.getItem("ssid"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(api.LOGOUT, requestOptions)
        .then(response => {
            response.json()
        })
        .then(result => {
            this.setState({logouted: true});
            localStorage.clear();
            window.location.reload();
        })
        .catch(error => console.log('error', error));
    }

    render() {
        if (this.state.logouted) return <Redirect exact to="/"/>
        if (!localStorage.getItem("ssid")) return null;
        if (Number(localStorage.getItem("roles")) == 0) {
            return (
                <div className="navbar">
                    <Link to="/result">Result</Link>
                    <div className="btn" style={{float: 'right', backgroundColor: '#d1406a'}} onClick={this.logout}>Logout</div>
                </div>
            );
        }

        if (Number(localStorage.getItem("roles")) == 1) {
            return (
                <div className="navbar">
                    <Link to="/result">Result</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Student</button>
                        <div className="dropdown-content">
                            <Link to="/student_manager">Student managers</Link>
                            <Link to="/add_student">Add Student</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Exam</button>
                        <div className="dropdown-content">
                            <Link to="/exam_manager">Exam managers</Link>
                            <Link to="/add_exam">Add exam</Link>
                        </div>
                    </div>
                    <div className="btn" style={{float: 'right', backgroundColor: '#d1406a'}} onClick={this.logout}>Logout</div>
                </div>
            );
        }
    }
}