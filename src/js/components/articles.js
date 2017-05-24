import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
require('../stylesheets/components/style.css');


export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }
  getArticles(source_id, sort_by) {
    var url = `https://newsapi.org/v1/articles?source=source_id&sortBy=sort_by&apiKey=213327409d384371851777e7c7f78dfe`
      .replace("source_id", source_id)
      .replace('sort_by', sort_by)
    axios.get(url)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });

      })
      .catch((error) => {
        this.setState({
          error
        });
      });

  }

  componentDidMount() {
    this.getArticles(this.props.params.source_id, this.props.params.sort_by)
  }
  componentWillReceiveProps(nextProps) {
    this.getArticles(nextProps.params.source_id, nextProps.params.sort_by)
  }

  render() {
    

    return (
          <div className="articles col-md-8">
            {this.props.params.sort_by == 'popular' && <h3>Popular Stories</h3>}
            {this.props.params.sort_by == 'latest' && <h3>Latest Stories</h3>}
            {this.props.params.sort_by == 'top' && <h3>Top Stories</h3>}
            {this.state.articles.map((article, key) => {
              const date = new Date(article.publishedAt).toString();
              return <div key={key}>
                <div className="articles-data">{article.id}</div>
                 <img src={article.urlToImage} height="300" width="500" />
                 <br />
                <h4><a href={article.url} target="_blank" >{article.title}</a></h4>
               
                <div>{article.description}</div>

                <br /> {article.author} <br />{date}
               

              </div>
            })}
        </div>
    );
  }
};