import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavButton.css';

function NavButton({link, name, pic}) {
    if (pic) {
        return (
            <div className={'nav-item__pic' }>
                <NavLink to={link}/>
                <button className={'btn'}><img src={pic}/></button>
            </div>
        )
    } else return (
        <div className={'nav-item'}>
            <NavLink to={link}/>
            <button className={'btn'}>{name}</button>
        </div>
    );
}

export default NavButton;