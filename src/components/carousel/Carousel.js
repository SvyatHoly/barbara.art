import React from 'react';
import CoverFlow from '../CoverFlow/CoverFlow';
import pic1 from '../../pics/IMG_9555.jpg';
import pic2 from '../../pics/IMG_9573.jpg';

export default function Carousel(forwardRef) {
    const images = [
        {src: pic1, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic2, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic1, ratio: '2:1',   label: 'Nazare 50000$'},
        {src: pic2, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic1, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic2, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic1, ratio: '15:19', label: 'Nazare 50000$'},
        {src: pic2, ratio: '15:19', label: 'Nazare 50000$'},
    ];

    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <CoverFlow imagesArr={images}
                   direction={width > 400 ? 'horizontal' : 'vertical'}
                   height={height*0.6}
                   width={width*0.6}/>
    );
}