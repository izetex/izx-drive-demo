import React, {Component} from 'react';
import Menu from './Menu';
import DisplayWallet from './DisplayWallet';
import ImportWallet from './ImportWallet';
import CreateWallet from './CreateWallet';

const izx = require('izx-drive');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { wallet: new izx.Wallet() };
        this.handleWallet = this.handleWallet.bind(this);
    }

    handleWallet (wallet){
        this.setState({wallet: wallet});
    }

    import_wallet (){
        return (
            <div id="app">
                <Menu value={this.state.wallet}/>
                <div className="col-sm-8 col-sm-offset-2">
                    <ImportWallet onWalletImport={this.handleWallet} />
                    <CreateWallet onWalletCreate={this.handleWallet} />
                </div>
            </div>
        );
    }

    display_wallet(wallet){
        return (
            <div id="app">
                <Menu value={this.state.wallet}/>
                <div className="col-sm-8 col-sm-offset-2">
                    <DisplayWallet wallet={this.state.wallet}/>
                </div>
            </div>
        );
    }

    render() {

        var wallet = this.state.wallet;
        if(wallet.initialized()){
            return this.display_wallet(wallet);
        }else{
            return this.import_wallet();
        }

    }

}

export default App;
