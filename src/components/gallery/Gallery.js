import React, {useEffect, useContext} from 'react';
import './Gallery.css'
import Carousel from "../carousel/Carousel";
import {Context} from '../../App';

function Gallery(props) {
    const context = useContext(Context);

    useEffect(() => {
        context();
        return context
    }, []);

    return (
        <div className={'body-wrapper'}>
            <div className={'container'}>
                <Carousel/>
            </div>
        </div>
    );
}

export default Gallery;