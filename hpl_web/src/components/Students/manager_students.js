import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './student.css';

export default class ManagerStudents extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            data: []
        };
        this.deleteStudent = this.deleteStudent.bind(this);
        this.getAllStudent = this.getAllStudent.bind(this);
    }

    deleteStudent(student) {
        if(window.confirm("Delete student \""+student.username.replace(/\"/g, '')+"\" ?")) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("id", student.id);
            urlencoded.append("ssid", localStorage.getItem("ssid"));
            urlencoded.append("email", localStorage.getItem("email"));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(api.DELETE_STUDENT, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    this.getAllStudent();
                }
                return response.json();
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    }

    componentDidMount() {
        this.getAllStudent();
    }

    getAllStudent() {
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("ssid", localStorage.getItem("ssid"));
            urlencoded.append("email", localStorage.getItem("email"));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

        fetch(api.GET_STUDENT, requestOptions)
        .then(response => response.json())
        .then(result => this.setState({data: result.msg}))
        .catch(error => console.log('error', error));
    }

    render() {
        return(
            <div>
                <h2>{this.state.data.length == 0? "Don't have student yet!":"Students manager:"}</h2>
                <table id="customers" style={{display: this.state.data.length == 0 ? 'none': 'inline-table'}}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Date of birth</th>
                            <th>Sex</th>
                            <th style={{width: '300px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(item => {
                                return (<tr key={item.id}>
                                    <td>{item.email.replace(/\"/g, '')}</td>
                                    <td>{item.username.replace(/\"/g, '')}</td>
                                    <td>{item.dob.replace(/\"/g, '')}</td>
                                    <td>{item.sex.replace(/\"/g, '')}</td>
                                    <td style={{textAlign: 'center'}}>
                                        <Link className="btn-o" style={{backgroundColor: '#259473'}} to={{pathname: "/edit_student?id="+item.id}}>Edit</Link>
                                        <button className="btn-o" style={{backgroundColor: '#bd083e', marginLeft: '10px'}} onClick={() => {this.deleteStudent(item)}}>Detele</button>
                                    </td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}