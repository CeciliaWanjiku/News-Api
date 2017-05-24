import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import Articles from '../src/js/components/Articles.jsx';

const mockArticles = {
  articles: [
    {
      "author": "Abhimanyu Ghoshal",
      "title": "Don’t stop Trump from tweeting, says Twitter CEO Jack Dorsey",
      "description": "While many Twitter users are furious that President Trump is allowed on the platform even though he uses it to personally attack citizens, and lash out at the press and his opponents, ...",
      "url": "https://thenextweb.com/us/2017/05/12/dont-stop-trump-from-tweeting-says-twitter-ceo-jack-dorsey/",
      "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/Donald-Trump.jpg",
      "publishedAt": "2017-05-12T06:34:56Z"
    },
    {
      "author": "Abhimanyu Ghoshal",
      "title": "Don’t stop Trump from tweeting, says Twitter CEO Jack Dorsey",
      "description": "While many Twitter users are furious that President Trump is allowed on the platform even though he uses it to personally attack citizens, and lash out at the press and his opponents, ...",
      "url": "https://thenextweb.com/us/2017/05/12/dont-stop-trump-from-tweeting-says-twitter-ceo-jack-dorsey/",
      "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/Donald-Trump.jpg",
      "publishedAt": "2017-05-12T06:34:56Z"
    }
    ,]
}
describe('Articles', () => {
  // it should set articles to state
  it('should render articles', () => {

    const wrapper = mount(
      <Articles params={{ source_id: 'abc-news-au', sort_by: 'top' }} />,
    );
    wrapper.setState(mockArticles)
    wrapper.update();
    const articles = wrapper.find('.articles-data')
    wrapper.find('articles-data');
    expect(articles.length).toBeGreaterThanOrEqual(1);
  });
});
