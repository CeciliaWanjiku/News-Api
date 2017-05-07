import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Sources from './components/sources';
import Login from './components/googlelogin.js';
import SourceSearch from './components/search.js';
import Articles from './components/articles.js';


ReactDOM.render(<Sources />, document.getElementById('main'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<SourceSearch />, document.getElementById('search'));
// ReactDOM.render(<Articles />, document.getElementById('articles'))

