import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/layout/Layout";
import {Route} from 'react-router-dom';
import Gallery from "./components/gallery/Gallery";
import Me from "./components/me/Me";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Route path={'/gallery'} exact component={Gallery}/>
                    {/*<Route path={'/'} exact render={()=>( <img src='./pics/IMG_9555.jpg'/>)}/>*/}
                    <Route path={'/me'} exact component={Me}/>
                </Layout>
            </div>
        );
    }
}

export default App;
