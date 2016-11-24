const React = require('react')
const ShowCard = require('./ShowCard')
const { object, string } = React.PropTypes
const Header = require('./Header')
const { connector } = require('./Store')

const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    // keypress fires a re-render but with out anything to change the value of the state
    // nothing changes in the input so value stays the same
    // TODO: React Link State Google
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
          // if the search term is anywhere in my show title or description, then return true
            // make a string containing the serc title and description
            // set it to uppercase to normalize
            // set the search term to uppercase and use it as the argument of indexOf
            // if the search term is found in the tile + description string, return it
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
            // spread operator
              <ShowCard {...show} key={show.imdbID} />
          ))}

        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
