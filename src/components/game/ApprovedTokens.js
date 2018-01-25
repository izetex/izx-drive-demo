import React, { Component } from 'react';

import './ApprovedTokens.css'

class ApprovedTokens extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = { opened: false, amount: 0 };
    }

    handleSubmit(event){

        var self = this;
        var game = this.props.game;
        var token = game.token;

        token.approve( game.address, this.state.amount ).then(function (result){
            self.setState({opened: false});
        }).catch( function(err){
            console.log(err);
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
            var game = this.props.game;
            var token = game.token;
            return this.state.opened ? (
                <div className="approve">
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="amount of tokens to approve for game"
                                   name="amount"
                                   value={this.state.amount}
                                   onChange={this.handleChange} />
                        </div>
                        <strong className="token-name">{token.symbol}'s</strong>
                        <button type="submit" className="btn btn-primary">Approve</button>&nbsp;
                        <a className="btn btn-default" onClick={this.handleClose}>Cancel</a>
                    </form>

                </div>
            ) : (
                <div className="approve">
                    <a onClick={this.handleClick}>Join the game with your tokens</a>
                </div>
            );
    }

}

export default ApprovedTokens;
