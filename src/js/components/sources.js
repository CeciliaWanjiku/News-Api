import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
require ('../stylesheets/components/style.css');

export default class Sources extends React.Component {
    constructor() {
        super();
        this.state = { sources: [] };
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v1/sources?language=en`) 
        .then((result) => {
            this.setState({
                sources:result.data.sources
            });
        })   
    }

    render() {    
        return(
            <div>
        
                {this.state.sources.map((sources)=> {
                    var url = "#/" + sources.id + "/" + sources.sortBysAvailable[0]
                    return( 
                    <div key={sources.id}>
                    <a href={url}> {sources.name} </a>
                    {sources.articles}
                    </div>)
                })}
                
           </div>
        );
    }
};