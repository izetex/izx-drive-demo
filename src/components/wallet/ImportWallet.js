import React, { Component } from 'react';

class ImportWallet extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {mnemonics: ''};
    }

    handleSubmit(event){
        let wallet = this.props.wallet;
        try{
            wallet.import(this.state.mnemonics);
            this.props.onWalletImport(wallet);
        }catch(err){
            this.props.onAlert({caption: "Fail to import wallet",
                error: "Enter valid private key or mnemonics, "+err});
        }
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({mnemonics: event.target.value});
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Import wallet key</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <textarea className="form-control"
                                      placeholder="Enter mnemonics or private key"
                                      value={this.state.mnemonics}
                                      onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Import</button>
                    </form>

                </div>
            </div>
        );
    }


}

export default ImportWallet;
