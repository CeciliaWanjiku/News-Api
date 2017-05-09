import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
require ('../stylesheets/components/style.css');


export default class Articles extends React.Component {
    constructor() {
        super();
        this.state = { articles: [] };
    }

    componentDidMount() {
        console.log('Inside Article component')
        var url = `https://newsapi.org/v1/articles?source=source_id&sortBy=sort_by&apiKey=213327409d384371851777e7c7f78dfe`
        .replace("source_id", this.props.params.source_id)
        .replace('sort_by', this.props.params.sort_by)
        axios.get(url) 
        .then((result) => {
            this.setState({
                articles:result.data.articles
            });
        })   
    }

    render() {        
        return(
            <div className="container">
                <div className="row">
                   <div className="articles">
                {this.state.articles.map((articles)=> {
                    return <div>
                        
                        <div>{articles.id}</div> 
                    
                        <a href={articles.url} target="_blank" >{articles.title}</a>
                        <div>{articles.description}</div>
                         
                         <br /> {articles.author}{articles.publishedAt}
                         
                         </div>
                })}
           </div>
           </div>
           </div>
        );
    }
};