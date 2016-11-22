const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
// Now we need to include the IndexRoute as well
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
// Bring In the Layout Component
const Layout = require('./Layout')
const Details = require('./Details')

const { shows } = require('../public/data')
const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
    if (showArray.length < 1) {
      // send back to the home page instead
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          {/* onEnter will get run everytime the route gets called */}
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />

        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
