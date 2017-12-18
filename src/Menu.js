import React, { Component } from 'react';
import logo from './assets/izx_logo_24x24.png';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Menu</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="navbar-brand">
                            IZX Drive
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Wallet {this.props.value.address}</a></li>
                        </ul>


                    </div>

                </div>
            </nav>
        );
    }
}

export default Menu;
