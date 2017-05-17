// import expect from 'expect';
import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import Home from '../src/js/components/home.js';
import Login from '../src/js/components/googlelogin.js';
import Sources from '../src/js/components/sources.js';
import SourceSearch from '../src/js/components/search.js';
import TopStories from '../src/js/components/topstories.js';
describe('Home', () => {
     // tests to see if the logo is displaying
        it('should render a logo', () => {
            const wrapper = shallow(
                <Home />
            );
            expect(
                wrapper.containsMatchingElement(<img src="../../images/Screen Shot 2017-05-09 at 7.40.01 PM.png" />)).toBe(true);

        })
        // it should contain a google+ sign in button
        it('should render a google sign in button', () => {
            const wrapper = shallow(
                <Home />
            );
            expect(
                wrapper.containsMatchingElement(<Login />)).toBe(true);
        })
        // it should render a search button
        it('should render a search button', () => {
            const wrapper = shallow(
                <Home />
            );
            expect(
                wrapper.containsMatchingElement(<SourceSearch />)).toBe(true);
        })
        // it should render sources
        it('should render a sources', () => {
            const wrapper = shallow(
                <Home />
            );
            expect(
                wrapper.containsMatchingElement(<Sources />)).toBe(true);
        })
        it('should render Top Stories', () => {
            const wrapper = shallow(
                <Home />
            );
            expect(
                wrapper.containsMatchingElement(<TopStories />)).toBe(true);
        })
});
