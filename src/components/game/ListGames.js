import React, { Component } from 'react';

import TokenGame from './TokenGame';

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
                        <p className="hidden-xs">
                            Address: <strong>{game.address}</strong>&nbsp;&nbsp;
                            Token: <strong>{game.token.name}</strong>
                        </p>
                        <RenderGame game={game}/>
                    </div>
                </div>
        );

    }
}

export default ListGames;
