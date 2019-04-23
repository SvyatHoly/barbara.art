import React from 'react';
import CoverFlow from '../CoverFlow/CoverFlow';
import {images} from '../../data/data'

export default function Carousel(props) {

    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <CoverFlow
            handleClick={props.handleClick}
            imagesArr={images}
            direction={width > 500 ? 'horizontal' : 'vertical'}
            height={height * 0.6}
            width={width * 0.6}
        />
    );
}