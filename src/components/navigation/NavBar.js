import React from 'react';
import sign from '../../pics/sign.png';
import './NavBar.css';
import NavButton from "./navButton/NavButton";

function NavBar(props) {
    const width = window.innerWidth;

    return (
        <div className={'wrapper'}>
        <div className={'navbar'}>
            <NavButton link={'/'} pic={<img className={'home'} src={sign}/>}/>
            <NavButton link={'/me'} name={'Me'}/>
            <NavButton link={'/gallery'} name={'Gallery'}/>
            <NavButton link={'/contacts'} name={'Contacts'}/>
        </div>
        </div>
    );
}

export default NavBar;