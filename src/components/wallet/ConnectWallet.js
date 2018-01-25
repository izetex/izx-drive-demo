import React, { Component } from 'react';

class ConnectWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            web3: window.web3
        };
    }

    handleSubmit(event){
        let wallet = this.props.wallet;
        try{
            wallet.connect_web3(this.state.web3);
            this.props.onWalletConnect(wallet);
        }catch(err){
            this.props.onAlert({caption: "Error connecting wallet", error: err});
        }
        event.preventDefault();
    }

    render() {

        if(!this.state.web3 || !this.state.web3.eth.accounts[0])
            return null;
        var name = {
            "1": "Foundation Ethereum", "3" : "Ropsten Ethereum"
        }[this.state.web3.version.network];
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Connect to your {name} wallet</h3>
                </div>
                <div className="panel-body">
                    <h5>{this.state.web3.eth.accounts[0]}</h5>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-success">Connect</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default ConnectWallet;
