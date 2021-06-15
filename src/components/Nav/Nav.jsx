import React from 'react';
import NavMenu from '../NavMenu/NavMenu'
import "./Nav.scss";

const Nav = () => {
    return (
        <nav className="nav">
            <h3>Mazin App</h3>
            <NavMenu />
        </nav>
    )
}

export default Nav;
