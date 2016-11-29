const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { func, string } = React.PropTypes

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  goToSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
            type='text'
            className='search'
            placeholder='search' />
        </form>
        {/* Internal to react-router, takes care of "magic" for you */}
        <Link to='/search' className='browse-all'> or browse all</Link>
      </div>
    )
  }
}
Landing.propTypes = {
  setSearchTerm: func,
  searchTerm: string
}
module.exports = connector(Landing)
