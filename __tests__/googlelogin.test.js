import React from 'react';
import { shallow } from 'enzyme';
import Login from '/Users/ceciliawahome/Desktop/News-App/src/js/components/googlelogin.js';

describe('App', () => {
it('should render a google sign in button', () => {
        const wrapper = shallow(
            <Login />
        );
        expect(
            wrapper.containsMatchingElement(<div class="g-signin2" data-onsuccess="onSignIn"></div>)).toBe(true);
});
});