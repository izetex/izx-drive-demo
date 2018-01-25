import React, { Component } from 'react';
import Async from 'react-promise';
import TransferOldTokens from './TransferOldTokens';
import style from './DisplayWallet.css';

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
        this.handleRefresh = this.handleRefresh.bind(this);
        this.state = { balances: [] };
    }

    componentDidMount() {
        this.setState({balances: this.props.wallet.token_balances()});
    }

    handleRefresh(event){
        this.setState({balances: this.props.wallet.token_balances()});
        event.preventDefault();
    }


    render() {
        var wallet = this.props.wallet;
        var mvp_game = this.props.mvp_game;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Your wallet</h3>
                </div>
                <div className="panel-body">
                    <p className="hidden-xs">
                        Address: <strong>{wallet.address}</strong>
                    </p>
                    <p>
                        <a href={'http://ropsten.etherscan.io/address/'+wallet.address} target="_blank" className={style.smallLink}>
                            <span className="glyphicon glyphicon-share"></span>Ropsten</a>&nbsp;&nbsp;
                        <a href={'http://etherscan.io/address/'+wallet.address} target="_blank" className={style.smallLink}>
                            <span className="glyphicon glyphicon-share"></span>Foundation</a>
                    </p>
                    <h4>Token balances
                        <a className={style.smallLink} onClick={this.handleRefresh}><span className="glyphicon glyphicon-refresh"></span> refresh</a>
                    </h4>
                    <TokenList tokens={this.state.balances}/>
                </div>
                <TransferOldTokens mvp_game={mvp_game} wallet={wallet} onAlert={this.props.onAlert}/>
            </div>
        );
    }
}

export default DisplayWallet;

