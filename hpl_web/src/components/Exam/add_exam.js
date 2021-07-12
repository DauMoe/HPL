import React from 'react';
import api from '../api';
import { Redirect } from 'react-router';
import './../Students/student.css';

export default class AddExam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            easy: undefined,
            medium: undefined,
            hard: undefined,
            total: undefined,
            time: undefined,
            err: false,
            createOK: false,
            isedit: false
        };
        this.handlerValue = this.handlerValue.bind(this);
        this.create_new = this.create_new.bind(this);
        this.getExamInfo = this.getExamInfo.bind(this);
        if (props.location.pathname.indexOf("id") > -1) {
            this.id = props.location.pathname.slice(props.location.pathname.indexOf("id")+3)
        } else {
            this.id = null
        }
        console.log(this.id);
    }

    componentDidMount() {
        if (!isNaN(Number(this.id)) && this.id !== null) {
            this.getExamInfo(this.id);
            this.setState({isedit: true});
        } else {
            this.setState({
                name: "",
                easy: undefined,
                medium: undefined,
                hard: undefined,
                total: undefined,
                time: undefined,
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
        console.log(this.state.easy + this.state.medium + this.state.hard);
        if (
                this.state.name.trim() == "" 
            ||  this.state.easy < -1 || this.state.easy > 100 || this.state.easy == undefined
            ||  this.state.medium < -1 || this.state.medium > 100 || this.state.medium == undefined
            ||  this.state.hard < -1 || this.state.hard > 100 || this.state.hard == undefined
            ||  this.state.total < -1 || this.state.total == undefined
            ||  this.state.time < -1 || this.state.time == undefined
            ||  (Number(this.state.easy) + Number(this.state.medium) + Number(this.state.hard)) != 100
        ) {
            this.setState({err: true});
            return;
        } else {
            this.setState({err: false});
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        if (this.state.isedit) {
            urlencoded.append("id", this.id);
        }
        urlencoded.append("ssid", localStorage.getItem("ssid"));
        urlencoded.append("email", localStorage.getItem("email"));
        urlencoded.append("name", this.state.name);
        urlencoded.append("easy", this.state.easy);
        urlencoded.append("medium", this.state.medium);
        urlencoded.append("hard", this.state.hard);
        urlencoded.append("total", this.state.total);
        urlencoded.append("time", this.state.time);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        if (this.state.isedit) {
            fetch(api.UPDATE_EXAM_CONFIG, requestOptions)
            .then(response => {
                if (response.status !== 200) {
                    // if (response.status === 403) {
                    //     alert("Name \""+this.state.name+"\" existed!");
                    // }
                    throw Error();
                }
                else this.setState({createOK: true});
            })
            .catch(error => console.log('error', error));
        } else {
            fetch(api.CREATE_NEW_EXAM_CONFIG, requestOptions)
            .then(response => {
                if (response.status !== 200) {
                    if (response.status === 403) {
                        alert("Name \""+this.state.name+"\" existed!");
                    }
                    throw Error();
                }
                else this.setState({createOK: true});
            })
            .catch(error => console.log('error', error));
        }

        
    }

    getExamInfo(id) {
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

        fetch(api.GET_EXAM_CONFIG, requestOptions)
        .then(response => {
            if (response.status !== 200) {
                if (response.status === 403) {
                    alert("Name \""+this.state.name+"\" existed!");
                }
                throw Error();
            }
            return response.json();
        })
        .then(result => {
            this.setState({
                name: result.msg[0].name.replace(/\"/g, ''),
                easy: result.msg[0].easy,
                medium: result.msg[0].medium,
                hard: result.msg[0].hard,
                total: result.msg[0].total,
                time: result.msg[0].time_exam,
            })
        })
        .catch(error => console.log('error', error));
    }

    render() {
        if (this.state.createOK){
            console.log("??");
            return <Redirect exact to="/exam_manager"/>
        }
        return(
            <div>
                <h2>{(this.id !== null) ? "Edit exam config No."+this.id : "Add exam config:"}</h2>
                <form action="#" className="add_student_form-container" onSubmit={this.create_new}>
                    <small style={{color: 'red', display: (this.state.err) ? 'inline':'none'}}>* Fill all fields<br/> and total of easy, meidum , hard must be equal 100%!</small><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Name" name="name" value={this.state.name}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Easy (%)" type="number" name="easy" value={this.state.easy}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Medium (%)" type="number" name="medium" value={this.state.medium}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Hard (%)" type="number" name="hard" value={this.state.hard}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Total (ques)" type="number" name="total" value={this.state.total}/><br/>
                    <input className="form-control margin-top-20" onChange={this.handlerValue} placeholder="Time (mins)" type="number" name="time" value={this.state.time}/><br/>
                    <button className="btn-o margin-top-20" style={{width: '100%', backgroundColor: '#1aa2a2', borderRadius: '8px'}} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}