import React from 'react';
import Axios from 'axios';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      articles: [],
      currentFilter: {
        filterKey: 'category',
        filterValue: 'general',
      },
      filters: {
        category: {
          business: 'business',
          entertainment: 'entertainment',
          gaming: 'gaming',
          general: ' general',
          music: 'music',
          politics: 'politics',
          science_and_nature: 'science-and-nature',
          sport: 'sport',
          technology: 'technology'
        }
      }
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentDidMount() {
    this.getCategoriesValues()

  }
  getCategoriesValues() {
    const filterKey = this.state.currentFilter.filterKey;
    const filterValue = this.state.currentFilter.filterValue;
    var category_url = `https://newsapi.org/v1/sources?${filterKey}=${filterValue}`
    Axios
      .get(category_url)
      .then(({ data }) => {
        this.setState((prevState) => (Object.assign({}, prevState, { sources: data.sources })
        ));
      });
  }

  handleFilterChange(event) {
    const { name, value } = event.target;
    var stateCallback = () => {
      this.getCategoriesValues();
    }
    this.setState((prevState) => {
      const newFilter = Object.assign({}, prevState.currentFilter, {
        [name]: value
      });
      console.log("new", newFilter)
      return Object.assign({}, prevState, {
        currentFilter: newFilter
      });
    }, stateCallback); //stateCallback()


  }

  render() {
    const {
            filters,
      sources,
      currentFilter: {
                filterKey,
        filterValue
            }
        } = this.state;

    const sourcesToDisplay = sources.filter(source => {
      return source[filterKey] === filterValue;
    });
    return (
      <div className="col-md-2">
        <select
          className="form-control c-select mb-2"
          name="filterKey"
          // style={{width: '15%'}}
          onChange={this.handleFilterChange}
          defaultValue={filterKey}
        >
          {Object.keys(filters).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select
          className="form-control c-select"
          name="filterValue"
          // style={{width: '15%'}}
          onChange={this.handleFilterChange}
          defaultValue={filterValue}
        >
          {Object.keys(filters[filterKey]).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div className="cat-data">
          {sourcesToDisplay.map((source) => {
            var url = "#/" + source.id + "/" + source.sortBysAvailable[0]
            return (
              <div key={source.id}>

                <a href={url} >{source.name}</a>
                {source.articles}
              </div>
            )

          })}
        </div>
      </div >
    );
  }
}
