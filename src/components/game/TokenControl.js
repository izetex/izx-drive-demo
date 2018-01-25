import React, { Component } from 'react';

import ApprovedTokens from './ApprovedTokens'

class TokenControl extends Component {

    render() {
        var game = this.props.game;
        return <div className="token-control">
            <p className="hidden-xs">
                Address: <strong>{game.address}</strong>&nbsp;&nbsp;
                Token: <strong>{game.token.name}</strong>
            </p>
            <ApprovedTokens game={game} onAlert={this.props.onAlert}/>
        </div>
    }

}

export default TokenControl;
