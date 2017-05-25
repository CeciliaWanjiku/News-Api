import React from 'react';
import { Router, Route, hashHistory} from 'react-router'
import Articles from './Articles.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
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
