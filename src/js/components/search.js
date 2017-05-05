import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
 
class SourceSearch extends Component {
 
  constructor (props) {
    super(props)
    this.state = { sources: [] }
  }
 
 
  render () {
    return (
      <div>
        <input type="search" id="mySearch" placeholder="Search for a source"/>
        <button onclick="myFunction()">Search</button>
      </div>
    )
  }
}
export default SourceSearch;
