import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/layout/Layout";
import {Route} from 'react-router-dom';
import Gallery from "./components/gallery/Gallery";
import Me from "./components/me/Me";

export const Context = React.createContext(() => null);

class App extends Component {

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

    render() {
        return (
            <div className="App">
                <div id={'bg'}/>
                <Context.Provider
                value={() => this.toggleBlur()}>
                <Layout>
                    <Route path={'/gallery'} exact component={Gallery} render={()=>this.toggleBlur()}/>
                    {/*<Route path={'/'} exact render={()=>( <img src='./pics/IMG_9555.jpg'/>)}/>*/}
                    <Route path={'/me'} exact component={Me}/>
                </Layout>

                </Context.Provider>
            </div>
        );
    }
}

export default App;
