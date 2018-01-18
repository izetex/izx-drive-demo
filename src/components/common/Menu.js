import React, {Component} from 'react';
import logo from '../../assets/izx_logo_24x24.png';
import WalletStorage from '../../util/WalletStorage';

var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');

function BrandHeader(){
    return <Navbar.Header>
        <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Brand>IZX Drive Demo
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>;
}

class Menu extends Component {


    handleSelect(eventKey) {
        var wallet = this.props.wallet;
        switch(eventKey){
            case 'lock':
                wallet.lock();
                this.props.onWalletCall(wallet);
                break;
            case 'save':
                try{
                    WalletStorage.saveToStore(wallet,  'password');
                }catch(e){}
                this.props.onWalletCall(wallet);
                break;
        }
    }

    render() {
        if(this.props.wallet.address){
            return (
                <Navbar collapseOnSelect>
                    <BrandHeader />
                    <Navbar.Collapse>
                        <Nav pullRight activeKey="1" onSelect={k => this.handleSelect(k)}>
                            <NavDropdown eventKey="4" title="Wallet" id="nav-dropdown">
                                <MenuItem eventKey="save">Save wallet</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="lock">Lock wallet</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }else{
            return (
                <Navbar collapseOnSelect>
                    <BrandHeader />
                </Navbar>
            );
        }
    }
}

export default Menu;
