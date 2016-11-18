const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// This does not have auto-binding unlike react createClass
// - class Search extends React.Component {
const Search = React.createClass({
  getInitialState () {
    // class syntax, this is done in the instructor
    return {
      searchTerm: 'amber'
    }
  },
  // synthetic event
  handleSearchTermEvent (ev) {
    this.setState({searchTerm: ev.target.value})
  },
  render () {
    // keypress fires a re-render but with out anything to change the value of the state
    // nothing changes in the input so value stays the same
    //TODO: React Link State Google
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo {this.state.searchTerm}</h1>
          <input type="text"
            className="search-input"
            placeholder="search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermEvent}
          />
        </header>
        <div className="shows">
          {data.shows.map((show) => (
            // spread operator
            <ShowCard {...show} key={show.imdbID} />
          ))}

        </div>
      </div>
    )
  }
})

module.exports = Search
