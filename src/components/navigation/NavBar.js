import React, {useContext, useEffect, useState} from 'react';
import sign from '../../pics/sign.png';
import './NavBar.css';
import NavButton from "./navButton/NavButton";
import icon from '../../pics/menu.svg';
import {Context} from '../../App';

function NavBar() {
    const context = useContext(Context);
    let {isOpen, changeMenuStatus} = context;
    const [localIsOpen, setLocalIsOpen] = useState(null);
    const width = window.innerWidth;

    useEffect(() => {
        if (isOpen !== localIsOpen) {
            menuClickHandler();
            setLocalIsOpen(isOpen)
        }
    }, [isOpen]);

    const menuClickHandler = () => {
        const navItems = Array.from(document.querySelectorAll('.nav-items')[0].children);
        navItems.forEach(el => {
            const list = el.classList;
            while (list.length > 0) list.remove(list[list.length - 1]);
            if (!isOpen) {
                list.add('nav-visible');
            }
        });
    };

    return (
        <div className={'wrapper'}>
            <div className={'navbar-icon'}/>
            <div className={'navbar'}>
                <NavButton link={'/'} pic={<img className={'home'} src={sign}/>}/>
                {width < 500
                ? <img className={'navbar-homepic'} src={icon} onClick={() => changeMenuStatus(!isOpen)}/>
                : null}
                <div className={'nav-items'}>
                    <NavButton link={'/me'} name={'Me'}/>
                    <NavButton link={'/gallery'} name={'Gallery'}/>
                    <NavButton link={'/contacts'} name={'Contacts'}/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;