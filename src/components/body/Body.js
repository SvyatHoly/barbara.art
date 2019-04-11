import React from 'react';
import desc from '../../pics/homepagepicture.jpg';
import mob from '../../pics/homemobile.jpg'
import './Body.css'

function Body(props) {
    return (
        <div className={'body-wrapper'}>
            {/*{window.innerWidth > 600*/}
            {/*? <img className={'pic'} src={desc}/>*/}
            {/*: <img className={'pic'} src={mob}/>}*/}
        </div>
    );
}

export default Body;