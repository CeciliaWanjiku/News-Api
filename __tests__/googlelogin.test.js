import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../src/js/components/googlelogin.js';
import { GoogleLogin } from 'react-google-login-component';

describe('App', () => {
it('should render a google sign in button', () => {
        const wrapper = shallow(
            <Login />
        );
        expect(
            wrapper.containsMatchingElement(<GoogleLogin />)).toBe(true);
});
});