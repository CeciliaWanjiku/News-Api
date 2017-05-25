import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../src/js/components/Home.jsx';
import SourcesSearch from '../src/js/components/SourcesSearch.jsx';

describe('Home', () => {
 // it should render a search bar
  it('should render a search bar', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(
      wrapper.containsMatchingElement(<SourcesSearch />)).toBe(true);
  })

});
