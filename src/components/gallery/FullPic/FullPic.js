import React, {useContext, useEffect} from 'react';
import './FullPic.css';

import {Context} from '../../../App';
import {NavLink} from "react-router-dom";

const FullPic = (props) => {
    const {id} = props.match.params;
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
        <div className={'fullpic-container'}>
            <NavLink to={'/gallery'}>
            <button className={'btn'}>back to gallery</button>
            </NavLink>
            <div><p><span className={'fullpic-text'}>{context.data[id].info}</span></p></div>
            <img className={'fullpic-pic'} src={context.data[id].src}></img>
        </div>
    );
};

export default FullPic;