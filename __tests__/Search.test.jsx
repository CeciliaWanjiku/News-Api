import React from 'react';
import { shallow, mount } from 'enzyme';
import SourcesSearch from '../src/js/components/SourcesSearch.jsx';

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

describe('Source Search', () => {
  // the array should have more than one source
  it('the search array should have more than one source', () => {
    const wrapper = mount(
      <SourcesSearch />,
    );
    wrapper.setState(mockSources)
    wrapper.update();
    const sources = wrapper.find('.search')
    wrapper.find('search');
    expect(sources.length).toBeGreaterThanOrEqual(1);
  });
});
