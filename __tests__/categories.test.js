import React from 'react';
import { shallow, mount } from 'enzyme';
import Categories from '../src/js/components/categories.js';
import { GoogleLogin } from 'react-google-login-component';
const mockSources = {
  sources: [
    {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": [
        "top"
      ]
    },]
}
describe('Categories', () => {
  it('should render categories', () => {
    const wrapper = shallow(
      <Categories />
    );
    expect(
      wrapper.containsMatchingElement(<div />)).toBe(true);
  });
  it('the array should have more than one source', () => {
    const wrapper = mount(
      <Categories />,
    );
    wrapper.setState(mockSources)
    wrapper.update();
    const sources = wrapper.find('.cat-data')
    wrapper.find('cat-data');
    expect(sources.length).toBeGreaterThanOrEqual(1);
  });

});