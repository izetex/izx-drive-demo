import React, { Component } from 'react';

class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let wallet = this.props.wallet;
        try{
            wallet.generate_new();
            this.props.onWalletCreate(wallet);
        }catch(err){
            this.props.onAlert({caption: "Error creating wallet", error: err});
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Create new wallet</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-success">Create</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default CreateWallet;
