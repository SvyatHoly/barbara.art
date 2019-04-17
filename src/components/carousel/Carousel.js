import React from 'react';
import CoverFlow from '../CoverFlow/CoverFlow';
import pic0 from '../../pics/pic0.jpg';
import pic1 from '../../pics/pic1.jpg';
import pic2 from '../../pics/pic2.jpg';
import pic4 from '../../pics/pic4.jpg';
import pic5 from '../../pics/pic5.jpg';


export default function Carousel() {
    const images = [
        {src: pic0, ratio: '900:1280', label: 'Nazare 50000$'},
        {src: pic1, ratio: '900:1280', label: 'Nazare 50000$'},
        {src: pic2, ratio: '1920:1280',   label: 'Nazare 50000$'},
        {src: pic4, ratio: '960:1280', label: 'Nazare 50000$'},
        {src: pic5, ratio: '1020:1280', label: 'Nazare 50000$'},
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