import React from 'react';
import Menu from '../Menu/Menu.js';
import logo from './logo.jpg';

function Header() {
    const style = {
        "display": "flex",
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "space-between",
        "border-bottom": "1px solid black",
    }
    const links = ["Home", "Guide Lines", "Tips", "Contact"]

    return (
        <header style={style}>
            <div><img src={logo} /></div>
            <Menu menuLinks={links}/>
        </header>
    )
}

export default Header;