import React, { Component } from 'react';

class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {error: null};
    }

    handleSubmit(event){
        let wallet = this.props.wallet;
        try{
            wallet.generate_new();
            this.props.onWalletCreate(wallet);
        }catch(err){
            this.setState({error: "Error creating wallet, "+err});
            console.log(err.stack);
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
                    {this.state.error && <p className="alert alert-warning">{this.state.error}</p> }
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-success">Create</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default CreateWallet;
