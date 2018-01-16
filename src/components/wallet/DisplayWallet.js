import React, { Component } from 'react';
import Async from 'react-promise';

import TransferOldTokens from './TransferOldTokens';

const TokenAmount = (props) => <Async promise={props.amount} then={(val) => <span>{val}</span>}/>

function TokenList(props) {
    const listItems = props.tokens.map((token) =>
        <li key={token.symbol}>{token.name}: <strong><TokenAmount amount={token.amount} /> {token.symbol}'s</strong></li>
    );
    return (
        <ul>{listItems}</ul>
    );
};


class DisplayWallet extends Component {

    constructor(props) {
        super(props);
        this.state = { balances: [] };
    }

    componentDidMount() {
        this.setState({balances: this.props.wallet.token_balances()});
    }

    render() {
        var wallet = this.props.wallet;
        var mvp_game = this.props.mvp_game;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Your wallet address {wallet.address}</h3>
                </div>
                <div className="panel-body">
                    <h4>Token balances</h4>
                    <TokenList tokens={this.state.balances}/>
                </div>
                <TransferOldTokens mvp_game={mvp_game} wallet={wallet}/>
            </div>
        );
    }
}

export default DisplayWallet;

