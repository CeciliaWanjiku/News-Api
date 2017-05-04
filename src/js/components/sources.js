import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
                    return <div>{sources.name} <br /> {sources.description}</div>
                })}
           </div>
        );
    }
};