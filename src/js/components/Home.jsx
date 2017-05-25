import React from 'react';
import SourcesSearch from './SourcesSearch.jsx';
import Categories from './Categories.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
              <Categories />
              {this.props.children}
              <SourcesSearch />
            </div>

        </div>
    );
  }
}
