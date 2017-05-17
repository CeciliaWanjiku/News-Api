import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../src/js/components/googlelogin.js';

describe('googlelogin', () => {
it('should render a google sign in button', () => {
        const wrapper = shallow(
            <Login />
        );
        expect(
            wrapper.containsMatchingElement(<div className="login"> </div>)).toBe(true);
});
});