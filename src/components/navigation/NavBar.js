import React from 'react';

import './NavBar.css';
import NavButton from "./navButton/NavButton";

function NavBar(props) {
    const width = window.innerWidth;

    return (
        <div className={'wrapper'}>
        <div className={'navbar'}>
            <NavButton link={'/me'} name={'Me'}/>
            <NavButton link={'/gallery'} name={'Gallery'}/>
            <NavButton link={'/contacts'} name={'Contacts'}/>
            <NavButton link={'/'} name={'Home'}/>
        </div>
        </div>
    );
}

export default NavBar;