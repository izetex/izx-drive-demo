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
        var c = this;
        this.props.mvp_game.transfer_old_tokens( this.props.wallet,
                                            this.state.hash).then(function (result){
           c.setState({opened: false});
        }).catch( function(err){
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

        if(this.props.wallet)

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
