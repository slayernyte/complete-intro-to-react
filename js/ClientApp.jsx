const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
// Now we need to include the IndexRoute as well
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
// Bring In the Layout Component
const Layout = require('./Layout')
const Details = require('./Details')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            {/* onEnter will get run everytime the route gets called */}
            <Route path='/details/:id' component={Details} />

          </Route>
        </Router>

      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
