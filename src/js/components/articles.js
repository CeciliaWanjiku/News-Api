import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Articles extends React.Component {
    constructor() {
        super();
        this.state = { articles: [] };
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe`) 
        .then((result) => {
            this.setState({
                articles:result.data.articles
            });
        })   
    }

    render() {        
        return(
            <div>
                {this.state.articles.map((articles)=> {
                    return <div>
                        <div>{articles.id}</div> 
                        <img src={articles.urlToImage}width="250" height="250"/><a href={articles.url} target="_blank" >{articles.title}</a>
                        <div>{articles.description}</div>
                         
                         <br /> {articles.publishedAt} <br /> 
                         {articles.author}
                         </div>
                })}
           </div>
        );
    }
};