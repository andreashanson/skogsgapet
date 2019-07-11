import React from 'react';

function Menu(props) {
    const styleUL = {
        "list-style-type": "none",
        "padding": "0",
        "margin": "0",
    }
    const styleLI = {
        "display": "inline"
    }


    let menu = props.menuLinks.map((item) => {
        return (
            <li style={styleLI}>{item}</li>
        )
    });

    return (
        <ul style={styleUL}>
            { menu }
        </ul>
    )
}

export default Menu;