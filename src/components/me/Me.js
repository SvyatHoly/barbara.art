import React, {useContext, useEffect} from 'react';
import me from '../../pics/pic3.jpg';
import './Me.css';
import {Context} from '../../App';

function Me(props) {
    const context = useContext(Context);
    const width = window.innerWidth;
    useEffect(() => {
        context.toggleBlur();
        if (width < 500) {
            context.changeMenuStatus(false);
        }
        return context.toggleBlur
    }, []);

    return (
        <div className={'me-wrapper'}>
            <div className={'me-container'}>
                <img src={me} className={'me-pic'}/>
                <p><span className={'me-text'}>Thank you for visiting, welcome.</span></p>
                <p><span className={'me-text'}>Im Barbara from Moscow, currently based in Barcelona.
                    I express myself thru visual arts since 3 y.o.</span></p>
                <p><span className={'me-text'}>CV:</span></p>
                <p><span className={'me-text'}>- Moscow Watercolor school of Sergey Andriyaka</span></p>
                <p><span className={'me-text'}>- Moscow Stroganov Academy of Arts and Industry</span></p>
                <p><span className={'me-text'}>- Bratislava Academy of Arts and Design</span></p>
                <p><span className={'me-text'}>- ELISAVA Barcelona Academy of Arts and Design</span></p>
            </div>
        </div>
    );
}

export default Me;