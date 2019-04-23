import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/layout/Layout";
import {Route} from 'react-router-dom';
import Gallery from "./components/gallery/Gallery";
import Me from "./components/me/Me";
import FullPic from "./components/gallery/FullPic/FullPic";
import Contacts from "./components/contacts/Contacts";
import {images} from './data/data';

export const Context = React.createContext({
    isOpen: true,
    toggleBlur: () => null,
    changeMenuStatus: () => null,
    data: {}
});

class App extends Component {

    state = {
        isOpen: true
    };

    toggleBlur = () => {
        const bodyClasses = document.querySelector('#bg').classList;
        if (!bodyClasses[0]) {
            bodyClasses.toggle('blurred')
        } else if (bodyClasses[0] === 'blurred') {
            bodyClasses.remove('blurred');
            bodyClasses.toggle('clear')
        } else {
            bodyClasses.remove('clear');
            bodyClasses.toggle('blurred')
        }
    };

    changeMenuStatus = (isOpen) => {
        this.setState({isOpen: isOpen})
    };

    render() {
        return (
            <div className="App">
                <div id={'bg'}/>
                <Context.Provider
                    value={{
                        isOpen: this.state.isOpen,
                        toggleBlur: this.toggleBlur,
                        changeMenuStatus: this.changeMenuStatus,
                        data: images
                    }}>
                    <Layout>
                        <Route path={'/gallery'} exact component={Gallery}/>
                        <Route path={'/gallery/:id'} component={FullPic}/>
                        <Route path={'/contacts'} component={Contacts}/>
                        {/*<Route path={'/'} exact render={()=>( <img src='./pics/IMG_9555.jpg'/>)}/>*/}
                        <Route path={'/me'} exact component={Me}/>
                    </Layout>

                </Context.Provider>
            </div>
        );
    }
}

export default App;
