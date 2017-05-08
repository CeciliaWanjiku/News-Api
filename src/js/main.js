import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Sources from './components/sources';
import Login from './components/googlelogin.js';
import SourceSearch from './components/search.js';
import Articles from './components/articles.js';
import { Router, Route, hashHistory } from 'react-router'
// require ('../stylesheets/components/style.css');


// ReactDOM.render(<Sources />, document.getElementById('main'));
// ReactDOM.render(<Login />, document.getElementById('login'));
// ReactDOM.render(<SourceSearch />, document.getElementById('search'));
ReactDOM.render(<Articles />, document.getElementById('articles'))
console.log(require('react-router-dom'))
ReactDOM.render(
    (<Router history= {hashHistory}>
        <Route path="/" component={Sources}>
        </Route>
        <Route path="/:source_id/:sort_by" component={Articles} />

    </Router>), document.getElementById('main'));