import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class SourcesSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            sources: [],
            search: 'Find a source'
        };
    }
    updateSearch(event) {
        this.setState({ search: event.target.value });

    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v1/sources?language=en`)
            .then((result) => {
                this.setState({
                    sources: result.data.sources
                });
            })
    }

    render() {
        let filteredSearch = this.state.sources.filter(
            (sources) => {
                return sources.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

            })
        console.log(filteredSearch)
        return (
            <div className="search">
                
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                {filteredSearch.map((sources) => {
                    var url = "#/" + sources.id + "/" + sources.sortBysAvailable[0]
                    return (
                        <div key={sources.id}>
                            <a href={url}> {sources.name} </a>
                            {sources.articles}
                        </div>)

                })}

            </div>
        );
    }
};
