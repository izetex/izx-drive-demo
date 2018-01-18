var store = require('store');
var KEY = 'izx_wallet_';

module.exports = {

    isStored: function(){
        return(!!store.get(KEY));
    },
    loadFromStore: function(wallet){
        wallet.load(store.get(KEY), 'password');
    },
    saveToStore: function(wallet, password){
        store.set(KEY, wallet.export(password));
    }

};