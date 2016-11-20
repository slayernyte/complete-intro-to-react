const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// This does not have auto-binding unlike react createClass
// - class Search extends React.Component {

// Search is automagicly bound to this for you
const Search = React.createClass({
  getInitialState () {
    // class syntax, this is done in the instructor
    return {
      searchTerm: ''
    }
  },
  // synthetic event
  handleSearchTermEvent (ev) {
    this.setState({searchTerm: ev.target.value})
  },
  render () {
    // keypress fires a re-render but with out anything to change the value of the state
    // nothing changes in the input so value stays the same
    // TODO: React Link State Google
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">s video</h1>
          <input type="text"
            className="search-input"
            placeholder="search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermEvent}
          />
        </header>
        <div className="shows">
          {data.shows
          // if the search term is anywhere in my show title or description, then return true
            // make a string containing the serc title and description
            // set it to uppercase to normalize
            // set the search term to uppercase and use it as the argument of indexOf
            // if the search term is found in the tile + description string, return it
            .filter((show) => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
            // spread operator
              <ShowCard {...show} key={show.imdbID} />
          ))}

        </div>
      </div>
    )
  }
})

module.exports = Search
