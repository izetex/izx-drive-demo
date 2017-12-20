import React, { Component } from 'react';

import style from './TransferOldTokens.css';

const izx = require('izx-drive');

class TransferOldTokens extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = { opened: false, user: '', dev: '' };
    }

    handleSubmit(event){
        izx.IzxMvpGame.transfer_old_tokens( this.props.wallet, this.state.user,  this.state.dev );
        event.preventDefault();
    }

    handleClick(event) {
        this.setState({opened: true});
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
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
                                      placeholder="userID"
                                      name="user"
                                      value={this.state.user}
                                      onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="dev"
                                   name="dev"
                                   value={this.state.userid}
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
