import React from 'react';
import { shallow, mount } from 'enzyme';
import Sources from '../src/js/components/Sources.jsx';

const mockSources = {sources: [
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
      ]},]}
describe('Sources', () => {
    // the array should have more than one source
  it('the array should have more than one source', () => {
      const wrapper = mount(
          <Sources />,
        );
        wrapper.setState(mockSources)
        wrapper.update();
        const sources = wrapper.find('.sources-data')
      wrapper.find('sources-data');
      expect(sources.length).toBeGreaterThanOrEqual(1);
    });
});
