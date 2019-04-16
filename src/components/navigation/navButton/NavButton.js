import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavButton.css';

function NavButton({link, name}) {
   return (
        <div className={'nav-item'}>
            <NavLink to={link}>
            <button className={'btn'}>{name}</button>
            </NavLink>
        </div>
    );
}

export default NavButton;