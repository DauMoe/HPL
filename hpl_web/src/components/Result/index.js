import React from 'react';
import './result.css';
import api from '../api';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", localStorage.getItem("email"));
        urlencoded.append("ssid", localStorage.getItem("ssid"));
        urlencoded.append("roles", localStorage.getItem("roles"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(api.GET_RESULT, requestOptions)
        .then(response => response.json())
        .then(result => this.setState({data: result.msg}))
        .catch(error => console.log('error', error));
    }

    render() {
        return(
            <div>
                <h2>{(this.state.data.length == 0) ? "Have no result!":"Result:"}</h2>
                <table id="customers" style={{display: (this.state.data.length == 0) ? 'none': 'inline-table'}}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th style={{textAlign: 'right'}} style={{textAlign: 'right'}}>Result</th>
                            <th style={{textAlign: 'right'}}>Starttime</th>
                            <th style={{textAlign: 'right'}}>Endtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(item => {
                                return (<tr key={item.id}>
                                    <td>{item.email.replace(/\"/g, '')}</td>
                                    <td style={{textAlign: 'right'}}>{item.result.replace(/\"/g, '')}</td>
                                    <td style={{textAlign: 'right'}}>{item.starttime.replace(/\"/g, '')}</td>
                                    <td style={{textAlign: 'right'}}>{item.endtime.replace(/\"/g, '')}</td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}