import React from 'react';
import Sources from './sources.js';
import Login from './googlelogin.js';
import SourceSearch from './search.js';
import Articles from './articles.js';
import TopStories from './topstories.js';
import Categories from './categories.js';
import { Router, Route, hashHistory } from 'react-router'
import Home from './home.js';



class App extends React.Component{
    
    render(){
        
        return(
            <Router history={hashHistory}>
                <Route exact path="/" component={Home}>
                    <Route path="/:source_id/:sort_by" component={Articles} />
                </Route>
                 
            </Router>
        )
    }
}
export default App;


