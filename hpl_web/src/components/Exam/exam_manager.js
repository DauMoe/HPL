import React from 'react';
import { Redirect } from 'react-router';
import api from '../api';
import './../Students/student.css';

export default class ExamConfigManager extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            data: [],
            redirect: false
        };
        this.deleteExam = this.deleteExam.bind(this);
        this.getAllExam = this.getAllExam.bind(this);
        this.redirect2edit = this.redirect2edit.bind(this);
        this.id = undefined;
    }

    redirect2edit(id) {
        this.id = id;
        this.setState({redirect: true});
    }

    deleteExam(exam) {
        if(window.confirm("Delete exam "+exam.name+"?")) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("id", exam.id);
            urlencoded.append("ssid", localStorage.getItem("ssid"));
            urlencoded.append("email", localStorage.getItem("email"));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(api.DELETE_EXAM, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    this.getAllExam();
                }
                return response.json();
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    }

    componentDidMount() {
        this.getAllExam();
    }

    getAllExam() {
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

        fetch(api.GET_EXAM_CONFIG, requestOptions)
        .then(response => response.json())
        .then(result => this.setState({data: result.msg}))
        .catch(error => console.log('error', error));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{pathname: `/edit_exam?id=${this.id}`}}/>
        }
        return(
            <div>
                <h2>{this.state.data.length == 0? "Don't have exam config yet!":"Exam config manager:"}</h2>
                <table id="customers" style={{display: this.state.data.length == 0 ? 'none': 'inline-table'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style={{textAlign: 'right'}}>Easy</th>
                            <th style={{textAlign: 'right'}}>Medium</th>
                            <th style={{textAlign: 'right'}}>Hard</th>
                            <th style={{textAlign: 'right'}}>Total questions</th>
                            <th style={{textAlign: 'right'}}>Time to finish</th>
                            <th style={{width: '300px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(item => {
                                return (<tr key={item.id}>
                                    <td>{item.name.replace(/\"/g, '')}</td>
                                    <td style={{textAlign: 'right'}}>{item.easy} %</td>
                                    <td style={{textAlign: 'right'}}>{item.medium} %</td>
                                    <td style={{textAlign: 'right'}}>{item.hard} %</td>
                                    <td style={{textAlign: 'right'}}>{item.total}</td>
                                    <td style={{textAlign: 'right'}}>{item.time_exam} mins</td>  
                                    <td style={{textAlign: 'center'}}>
                                        {/* <Link className="btn-o" style={{backgroundColor: '#259473'}} to={{pathname: "/add_exam?id="+item.id}}>Edit</Link> */}
                                        <button className="btn-o" style={{backgroundColor: '#259473'}} onClick={() => this.redirect2edit(item.id)}>Edit</button>
                                        <button className="btn-o" style={{backgroundColor: '#bd083e', marginLeft: '10px'}} onClick={() => {this.deleteExam(item)}}>Detele</button>
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