import React, {useContext, useEffect} from 'react';
import me from '../../pics/pic3.jpg';
import './Me.css';
import {Context} from '../../App';

function Me(props) {
    const context = useContext(Context);

    useEffect(() => {
        context();
        return context
    }, []);

    return (
        <div className={'me-wrapper'}>
            <div className={'me-container'}>
            <img src={me} className={'me-pic'}/>
            <p>
                <span className={'me-text'}>
                Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!Hello, my name is Barbara. Im 17 and Im studying in Moscow Stroganov Academy of arts and industry.
                Thank you!
                </span>
            </p>
            </div>
        </div>
    );
}

export default Me;