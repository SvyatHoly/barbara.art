import React, {useRef, useEffect} from 'react';
import './Gallery.css'
import Carousel from "../carousel/Carousel";
import * as ReactDOM from "react-dom";

function Gallery(props) {
    const ref = useRef(null);
    //
    // useEffect(()=>{
    //     if (ref.current) {
    //         ReactDOM.render(, ref.current)
    //     }
    //
    // }, [ref.current]);
    return (
        <div className={'body-wrapper'}>
            <div className={'container'} ref={ref}>
                <Carousel forwardRef={ref}/>
            </div>
        </div>
    );
}

export default Gallery;