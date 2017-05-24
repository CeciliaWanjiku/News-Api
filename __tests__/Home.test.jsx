import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import Home from '../src/js/components/Home.jsx';
import SourceSearch from '../src/js/components/Search.jsx';

describe('Home', () => {
 // it should render a search button
  it('should render a search button', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(
      wrapper.containsMatchingElement(<SourceSearch />)).toBe(true);
  })

});
