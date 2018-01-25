import React, {Component} from 'react';
import Menu from './components/common/Menu';
import LogTable from './components/common/LogTable';
import DisplayWallet from './components/wallet/DisplayWallet';
import ImportWallet from './components/wallet/ImportWallet';
import CreateWallet from './components/wallet/CreateWallet';
import ConnectWallet from './components/wallet/ConnectWallet';
import LoadWallet from './components/wallet/LoadWallet';
import ListGames from './components/game/ListGames';
import AlertDismissable from './components/common/AlertDismissable';

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

        this.state = { wallet: wallet, mvp_game: mvp_game, events: [], show_alert: false };
        this.handleWallet = this.handleWallet.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
    }

    handleWallet (wallet){
        this.setState({wallet: wallet});
        var self = this;
        if(wallet.connection){
            wallet.tokens().concat(wallet.games()).map(function(e){
                new izx.Logger(e).subscribe(function(record) {
                    var events = self.state.events;
                    events.unshift({id: events.length+1, content: record});
                    self.setState({events: events});
                });
            });
        }
    }

    handleAlert ( alert ){
        this.setState({ show_alert: true, alert: alert });
    }

    hideAlert() {
        this.setState({ show_alert: false });
    }

    import_wallet (){
        var wallet = this.state.wallet;
        return (
            <div id="app">
                <Menu wallet={wallet} onWalletCall={this.handleWallet}/>

                <div className="col-sm-8 col-sm-offset-2">
                    <AlertDismissable show={this.state.show_alert} alert={this.state.alert} hide={this.hideAlert}/>
                    <LoadWallet wallet={wallet} onWalletLoad={this.handleWallet} onAlert={this.handleAlert}/>
                    <ConnectWallet wallet={wallet} onWalletConnect={this.handleWallet} onAlert={this.handleAlert}/>
                    <ImportWallet wallet={wallet} onWalletImport={this.handleWallet} onAlert={this.handleAlert}/>
                    <CreateWallet wallet={wallet} onWalletCreate={this.handleWallet} onAlert={this.handleAlert}/>
                </div>
            </div>
        );
    }

    display_wallet(wallet){
        return (
            <div id="app">
                <Menu wallet={wallet} onWalletCall={this.handleWallet}/>
                <div>
                    <AlertDismissable show={this.state.show_alert} alert={this.state.alert} hide={this.hideAlert}/>
                    <div className="col-md-7">
                        <ListGames wallet={wallet} onAlert={this.handleAlert}/>
                    </div>

                    <div className="col-md-5">
                        <DisplayWallet mvp_game={this.state.mvp_game} wallet={wallet} onAlert={this.handleAlert}/>
                    </div>
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
