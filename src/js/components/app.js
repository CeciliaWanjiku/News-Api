import React from 'react';
import Articles from './articles.js';
import Home from './home.js';

import { Router, Route, hashHistory } from 'react-router'




class App extends React.Component {

  render() {

    return (
      <Router history={hashHistory}>
        <Route exact path="/" component={Home}>
          <Route path="/:source_id/:sort_by" component={Articles} />
        </Route>

      </Router>
    )
  }
}
export default App;


