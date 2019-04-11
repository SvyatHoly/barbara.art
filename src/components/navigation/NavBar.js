import React from 'react';

import './NavBar.css';
import NavButton from "./navButton/NavButton";
import home from "../../pics/homebutton+logo.jpg";

function NavBar(props) {
    const width = window.innerWidth;
    console.log(width);
    const homeBtn = width < 400
    ?  <NavButton link={'/'} name={'Home'}/>
    :  <NavButton link={'/'} name={'Home'} pic={home}/>;

    return (
        <div className='navbar'>
            {homeBtn}
            <NavButton link={'/contacts'} name={'Contacts'}/>
            <NavButton link={'/gallery'} name={'Gallery'}/>
            <NavButton link={'/me'} name={'Me'}/>
        </div>
    );
}

export default NavBar;