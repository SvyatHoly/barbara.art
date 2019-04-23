import React, {useContext} from 'react';
import CoverFlow from '../CoverFlow/CoverFlow';
import {Context} from '../../App';

export default function Carousel(props) {
    const context = useContext(Context);
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <CoverFlow
            handleClick={props.handleClick}
            imagesArr={context.data}
            direction={width > 500 ? 'horizontal' : 'vertical'}
            height={height * 0.6}
            width={width * 0.6}
        />
    );
}