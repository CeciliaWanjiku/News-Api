import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
//import A from './components/materialui.js';
import DropDownMenud from './components/dropdownmenu.js';
import { Router, Route, hashHistory } from 'react-router'
// require ('../stylesheets/components/style.css');

ReactDOM.render(
    <App/>,
     document.getElementById('main')
)
// ReactDOM.render(<Sources />, document.getElementById('sources'));
// ReactDOM.render(<Login />, document.getElementById('login'));
// ReactDOM.render(<SourceSearch />, document.getElementById('search'));
// // ReactDOM.render(<Articles />, document.getElementById('articles'));
// ReactDOM.render(<TopStories />, document.getElementById('topstories'));
// ReactDOM.render(<Appui />,document.getElementById('appui'));
// ReactDOM.render(<DropDownMenud />, document.getElementById('dropdownmenu'))
/*console.log(require('react-router-dom'))
ReactDOM.render(
    (<Router history= {hashHistory}>
        <Route path="/" component={Sources}></Route>
        <Route path="/:source_id/:sort_by" component={Articles} />
        <Route path="/"component={DropDownMenud} />

    </Router>), document.getElementById('main'));*/