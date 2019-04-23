import React, {useEffect, useContext} from 'react';
import './Gallery.css'
import Carousel from "../carousel/Carousel";
import {Context} from '../../App';

function Gallery(props) {
    const context = useContext(Context);
    const width = window.innerWidth;
    useEffect(() => {
        context.toggleBlur();
        if (width < 500) {
            context.changeMenuStatus(false);
        }
        return context.toggleBlur
    }, []);

    const handleClick = (id) => {
        const {history, match} = props;
        history.push(match.url + '/' + id);
    };
    return (
        <div className={'body-wrapper'}>
            <div className={'container'}>
                <Carousel handleClick={handleClick}/>
            </div>
        </div>
    );
}

export default Gallery;