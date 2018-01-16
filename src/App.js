import React, {Component} from 'react';
import Menu from './components/common/Menu';
import LogTable from './components/common/LogTable';
import DisplayWallet from './components/wallet/DisplayWallet';
import ImportWallet from './components/wallet/ImportWallet';
import CreateWallet from './components/wallet/CreateWallet';
import ConnectWallet from './components/wallet/ConnectWallet';

const izx = require('izx-drive');

class App extends Component {

    constructor(props) {
        super(props);

        var self = this;

        var wallet = new izx.Wallet();
        var mvp_game = izx.IzxMvpGame;

        [wallet, mvp_game].map(function(e){
            new izx.Logger(e).subscribe(function(record) {
                var events = self.state.events;
                events.unshift({id: events.length+1, content: record});
                self.setState({events: events});
            });
        });

        this.state = { wallet: wallet, mvp_game: mvp_game, events: [] };
        this.handleWallet = this.handleWallet.bind(this);
    }

    handleWallet (wallet){
        this.setState({wallet: wallet});
    }

    import_wallet (){
        var wallet = this.state.wallet;
        return (
            <div id="app">
                <Menu value={wallet}/>
                <div className="col-sm-8 col-sm-offset-2">
                    <ConnectWallet wallet={wallet} onWalletConnect={this.handleWallet} />
                    <ImportWallet wallet={wallet} onWalletImport={this.handleWallet} />
                    <CreateWallet wallet={wallet} onWalletCreate={this.handleWallet} />
                </div>
            </div>
        );
    }

    display_wallet(wallet){
        return (
            <div id="app">
                <Menu value={this.state.wallet}/>
                <div className="container">
                    <DisplayWallet mvp_game={this.state.mvp_game} wallet={this.state.wallet}/>
                </div>

                <footer className="footer">
                    <LogTable eventList={this.state.events}/>
                </footer>
            </div>
        );
    }

    render() {

        var wallet = this.state.wallet;
        if(wallet.connection){
            return this.display_wallet(wallet);
        }else{
            return this.import_wallet();
        }

    }

}

export default App;
