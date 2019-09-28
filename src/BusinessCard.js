import React, { Component } from 'react';
import './BusinessCard.css';

class BusinessCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <center>
                <h1>
                    Business Card
                </h1>
                <p>
                    <div>Firstname: {this.props.fname}</div>
                    <div>Lastname: {this.props.lname}</div>
                    <div>Address: {this.props.addr}</div>
                    <div>Email: {this.props.Email}</div>
                    <div>Phone Number: {this.props.num}</div>
                </p>
            </center>
        )
    }
}

export default BusinessCard;