import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export default class NotFound extends React.Component {
    render() {
        return(
            <div className="notfound_container">
                <h1>Oops!</h1>
                <p>Seem you're lost. Let me's take you to <Link to="/result">result page!</Link></p>
            </div>
        );
    }
}