import React, {useContext, useEffect} from 'react';
import {Context} from '../../App';
import instagram from '../../pics/instagram.png';
import facebook from '../../pics/facebook.png';
import email from '../../pics/email.png';
import './Contacts.css';

const Contacts = () => {
    const context = useContext(Context);
    const width = window.innerWidth;

    useEffect(() => {
        context.toggleBlur();
        if (width < 500) {
            context.changeMenuStatus(false);
        }
        return context.toggleBlur
    }, []);

    return (
        <div>
            <a href={'https://www.instagram.com/barbarashik/'}>
                <p>
                    <img style={{width: '50px'}} src={instagram}/>
                </p>
            </a>
            <a href={'https://www.facebook.com/barbara.shilova'}>
                <p>
                    <img style={{width: '50px'}} src={facebook}/>
                </p>
            </a>
            <p>
                <img style={{width: '50px'}} src={email}/>
            </p>
            <p><span className={'contact-text'}>barbarashik.art@gmail.com</span></p>

        </div>
    );
};

export default Contacts;