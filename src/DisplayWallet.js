import React, { Component } from 'react';

class DisplayWallet extends Component {

    render() {
        var wallet = this.props.wallet;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Your wallet address {wallet.address}</h3>
                </div>
                <div className="panel-body">
                </div>
            </div>
        );
    }

}

export default DisplayWallet;
