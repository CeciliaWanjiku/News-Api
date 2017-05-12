import articles from '../src/js/components/articles.js';
import Client from '../src/Client';
 jest.mock('../src/Client');


 describe('articles', () => {

it('should call `Client.search() with `value`', () => {
      const invocationArgs = Client.search.mock.calls[0];
      expect(
        invocationArgs[0]
      ).toEqual(value);
});
    describe('and API returns results', () => {
      const articles = [
-{
author: "Matthew Hughes",
title: "Here are all the reasons why I want Amazon’s Echo Show",
description: "&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n&nbsp;\r\n\r\n ...",
url: "https://thenextweb.com/gadgets/2017/05/09/here-are-all-the-reasons-why-i-want-amazons-echo-show/",
urlToImage: "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/echo-show-1.jpg",
"publishedAt": "2017-05-09T16:51:19Z"
},
-{
author: "Annick van Dijk",
title: "Here’s how to convince your boss you should go to TNW Conference 2017",
description: "Tell them you’ll get shit done. \r\n\r\nSeriously. \r\n\r\nWe’re not just talking about swapping business cards and coming back with great ideas – we’re talking about doing your job at the ...",
url: "https://thenextweb.com/insider/2017/05/09/heres-convince-boss-go-tnw-conference-2017/",
urlToImage: "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/TNW-Conference-2016-Day-One-Image-by-Bas-Uterwijk-dan@heisenbergmedia.com-A003.jpg",
publishedAt: "2017-05-09T16:37:24Z"
},
      ]
      beforeEach(() => {
  
        const invocationArgs = Client.search.mock.calls[0];
        const cb = invocationArgs[1];
        cb(sources);
        wrapper.update();
}),
    }
 }
