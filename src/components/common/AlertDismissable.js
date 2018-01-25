import React, { Component } from 'react';

var Alert = require('react-bootstrap/lib/Alert');
var Button = require('react-bootstrap/lib/Button');

class AlertDismissable extends Component {
    render() {
        if(!this.props.show){
            return null;
        }else if (this.props.alert.error) {
            return (
                <Alert bsStyle="danger" onDismiss={this.props.hide}>
                    <h4>{this.props.alert.caption || 'Oh snap! You got an error!'}</h4>
                    <p>{this.props.alert.error}</p>
                    <p>
                        <Button onClick={this.props.hide} bsStyle="danger">Close</Button>
                    </p>
                </Alert>
            );
        }else if (this.props.alert.transaction) {
            return <Alert bsStyle="info" onDismiss={this.props.hide}>
                <h4>{this.props.alert.caption}</h4>
                <p>Transaction with the hash: {this.props.alert.transaction}<br/>
                    is created and will be mined soon.&nbsp;&nbsp;
                    <Button onClick={this.props.hide} bsStyle="info">OK</Button>
                </p>
            </Alert>
        }else if (this.props.alert.message) {
            return <Alert bsStyle="success" onDismiss={this.props.hide}>
                <h4>{this.props.alert.caption}</h4>
                <p>{this.props.alert.message}&nbsp;&nbsp;
                    <Button onClick={this.props.hide} bsStyle="success">OK</Button>
                </p>
            </Alert>
        }

    }
}

export default AlertDismissable;