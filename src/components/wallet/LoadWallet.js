import React, { Component } from 'react';
import WalletStorage from '../../util/WalletStorage';

class LoadWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
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
            this.props.onAlert({caption: "Error loading wallet",
                error: err});
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
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-success">Load</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default LoadWallet;
