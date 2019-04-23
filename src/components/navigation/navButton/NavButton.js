import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavButton.css';

function NavButton({link, name, pic}) {
    if (pic) {
        return (
            <div className={'nav-item--pic'}>
                <NavLink to={link}>
                    <button className={'pic-btn'}>{pic}</button>
                </NavLink>
            </div>
        )
    } else return (
        <div className={'nav-item'}>
            <NavLink to={link}>
            <button className={'btn'}>{name}</button>
            </NavLink>
        </div>
    );
}

export default NavButton;