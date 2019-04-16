import React from 'react';
import me from '../../pics/me.jpg';
import './Me.css';

function Me(props) {

    return (
        <div className={'me-wrapper'}>
            <div className={'me-container'}>
            <img src={me} className={'me-pic'}/>
            <div className={'text'}>
                Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!
            </div>
            </div>
        </div>
    );
}

export default Me;