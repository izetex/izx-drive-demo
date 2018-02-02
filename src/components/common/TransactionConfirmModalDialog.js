import React, { Component } from 'react';
import Modal from 'react-modal';
var Button = require('react-bootstrap/lib/Button');

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class TransactionConfirmModalDialog extends Component {


    handleConfirm(){
        this.props.confirmCallback(null, true);
        this.props.handleCloseConfirm();
    }

    handleReject(){
        this.props.confirmCallback("User rejected transaction", false);
        this.props.handleCloseConfirm();
    }

    render(){
        if(!this.props.isOpen)
            return null;
        var tx = this.props.txParams;
        return <Modal
            style={customStyles}
            isOpen={this.props.isOpen}
            ariaHideApp={false}
            contentLabel="Modal">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Confirm transaction</h3>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>From</td>
                            <th>{tx.from}</th>
                        </tr>
                        <tr>
                            <td>To</td>
                            <th>{tx.to}</th>
                        </tr>
                        <tr>
                            <td>Gas</td>
                            <th>{parseInt(tx.gas, 16)}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <Button onClick={this.handleConfirm.bind(this)} bsStyle="success">Confirm</Button>&nbsp;&nbsp;
                <Button onClick={this.handleReject.bind(this)} bsStyle="danger">Reject</Button>
            </div>
        </Modal>
    }
}

export default TransactionConfirmModalDialog;