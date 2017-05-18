import React from 'react';
import Sources from './sources.js';
import Login from './googlelogin.js';
import SourceSearch from './search.js';
import Articles from './articles.js';
import TopStories from './topstories.js';
import Categories from './categories.js';


import { Router, Route, hashHistory } from 'react-router';


class Home extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <img src="../../images/Screen Shot 2017-05-09 at 7.40.01 PM.png" />
              <SourceSearch />
              <Categories />
              {this.props.children}
            </div>

        </div>
    );
  }
}
export default Home;
