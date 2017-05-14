// import expect from 'expect';
import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
// import App from '../src/js/components/home.js';
import Sources from '../src/js/components/sources.js';
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
    // it should contain a google+ sign in button
  it('should render sources', () => {
    //   const result = { data:
    //          { sources: [{ name: 'name1' }] },
    //     };

      const wrapper = mount(
          <Sources />,
        );
        wrapper.setState(mockSources)
        wrapper.update();
        const sources = wrapper.find('.sources-data')
      console.log(wrapper.find('sources-data'));
      expect(sources.length).toBeGreaterThanOrEqual(1);
    });
    
    /*
        // tests to see if the logo is displaying
        it('should render a logo', () => {
            const wrapper = shallow(
                <App />
            );
            expect(
                wrapper.contains(<img src="../img/logo.png" />)).toBe(true);

        })
        // it should contain a google+ sign in button
        it('should render a google sign in button', () => {
            const wrapper = shallow(
                <App />
            );
            expect(
                wrapper.containsMatchingElement(<div class="g-signin2" data-onsuccess="onSignIn"></div>)).toBe(true);
        })
        // tests for the different dropdown menus
        it('should render a dropdown menu for name', () => {
            const wrapper = shallow(
                <App />
            );
            expect(
                wrapper.containsMatchingElement(
                    <select>
                        <option>
                            {sources.name}
                        </option>
                    </select>)).toBe(true);

        });
        // testing if the story headline contains a title, description,url link and date it was published
        it('should render story headlines', () => {
            const wrapper = shallow(
                <Sources />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <div>{articles.title}</div>
                        <div>{articles.description}</div>
                        <div>{articles.url}</div>
                        <div>{articles.urlToImage}</div>
                        <div>{articles.publishedAt}</div>
                    </div>

                )).toBe(true);

        })
        it('should render a list of sources', () => {
            const wrapper = shallow(
                <Sources />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <ul>{sources}</ul>
                    </div>
                )).toBe(true);


        })

        // filter by top stories
        it('should render top stories', () => {
            const wrapper = shallow(
                <Sources />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <div>{articles.title}</div>
                        <div>{articles.description}</div>
                        <div>{articles.url}</div>
                        <div>{articles.urlToImage}</div>
                        <div>{articles.publishedAt}</div>
                    </div>
                )).toBe(true);
        })
        // filters by latest
        it('should render latest stories', () => {
            const wrapper = shallow(
                <Sources />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <div>{articles.title}</div>
                        <div>{articles.description}</div>
                        <div>{articles.url}</div>
                        <div>{articles.urlToImage}</div>
                        <div>{articles.publishedAt}</div>
                    </div>
                )).toBe(true);
        })
        // filters by popular
        it('should render popular stories', () => {
            const wrapper = shallow(
                <App />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <div>{articles.title}</div>
                        <div>{articles.description}</div>
                        <div>{articles.url}</div>
                        <div>{articles.urlToImage}</div>
                        <div>{articles.publishedAt}</div>
                    </div>
                )).toBe(true);
        })
        it('should render a search bar', () => {
            const wrapper = shallow(
                <App />
            );
            expect(
                wrapper.containsMatchingElement(
                    <div>
                        <SearchBar onSearch={[Function]} />
                    </div>
                )).toBe(true);
        })*/
});
