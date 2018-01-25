import React, { Component } from 'react';

import './TransferOldTokens.css';

class TransferOldTokens extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = { opened: false, hash: '' };
    }

    handleSubmit(event){
        var self = this;
        this.props.mvp_game.transfer_old_tokens( this.props.wallet,
                                            this.state.hash).then(function (result){
           self.setState({opened: false});
           self.props.onAlert({caption: "Tokens are transfered", message: String(result)});
        }).catch( function(err){
           self.props.onAlert({caption: "Error transfering tokens", error: err});
        });
        event.preventDefault();
    }

    handleClose(event) {
        this.setState({opened: false});
    }

    handleClick(event) {
        this.setState({opened: true});
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });

    }

    render() {
        return this.state.opened ? (
            <div className="transfer">
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                      placeholder="hash from app"
                                      name="hash"
                                      value={this.state.hash}
                                      onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Transfer</button>&nbsp;
                        <a className="btn btn-default" onClick={this.handleClose}>Cancel</a>
                    </form>

            </div>
        ) : (
            <div className="transfer">
                <a onClick={this.handleClick}>Transfer tokens from application...</a>
            </div>
        );
    }

}

export default TransferOldTokens;
