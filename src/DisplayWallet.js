import React, { Component } from 'react';

function TokenList(props) {
    const listItems = props.tokens.map((token) =>
        <li key={token.symbol}>{token.name}: <strong>{token.amount} {token.symbol}</strong></li>
    );
    return (
        <ul>{listItems}</ul>
    );
};

class DisplayWallet extends Component {


    render() {
        var wallet = this.props.wallet;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Your wallet address {wallet.address}</h3>
                </div>
                <div className="panel-body">
                    <h4>Token balances</h4>
                    <TokenList tokens={wallet.token_balances()} />
                </div>
            </div>
        );
    }

}

export default DisplayWallet;

