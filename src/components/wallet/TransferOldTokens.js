import React, { Component } from 'react';

import './TransferOldTokens.css';

const izx = require('izx-drive');

class TransferOldTokens extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = { opened: false, hash: '' };
    }

    handleSubmit(event){
        var c = this;
        izx.IzxMvpGame.transfer_old_tokens( this.props.wallet,
                                            this.state.hash).then(function (result){
                c.setState({opened: false});
            }).catch( function(err){
            });
        event.preventDefault();
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

                        <button type="submit" className="btn btn-default">Transfer</button>
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
