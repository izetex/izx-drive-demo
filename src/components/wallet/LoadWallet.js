import React, { Component } from 'react';
import WalletStorage from '../../util/WalletStorage';

class LoadWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: null
        };
    }

    componentDidMount() {
        this.setState({canLoad: WalletStorage.isStored()});
    }

    handleSubmit(event){
        let wallet = this.props.wallet;
        try{
            WalletStorage.loadFromStore(wallet);
            this.props.onWalletLoad(wallet);
        }catch(err){
            this.setState({error: "Error loading wallet, "+err});
        }
        event.preventDefault();
    }

    render() {
        if(!this.state.canLoad)
            return null;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Load saved wallet</h3>
                </div>
                <div className="panel-body">
                    {this.state.error && <p className="alert alert-warning">{this.state.error}</p> }
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-success">Load</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default LoadWallet;
