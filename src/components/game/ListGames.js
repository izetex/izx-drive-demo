import React, { Component } from 'react';

import TokenGame from './TokenGame';
import TokenControl from './TokenControl';

const games = {
    'Token Game': TokenGame
}

function RenderGame(props) {
    const TagName = games[props.game.name];
    return <TagName game={props.game} />
}

class ListGames extends Component {

    constructor(props) {
        super(props);
        this.state = { games: [] };
    }

    componentDidMount() {
        this.setState({games: this.props.wallet.games()});
    }

    render(){
        return this.state.games.map((game) =>
                <div className="panel panel-default" key={game.name}>
                    <div className="panel-heading">
                        <h3 className="panel-title">{game.name}</h3>
                    </div>
                    <div className="panel-body">
                        <TokenControl game={game} onAlert={this.props.onAlert}/>
                        <RenderGame game={game} onAlert={this.props.onAlert}/>
                    </div>
                </div>
        );

    }
}

export default ListGames;
