const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')
const Search = require('./Search')
// const ReactRouter = require('react-router')

// Destructuring
// const { Router, Route, hashHistory} = ReactRouter

// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

/*
- Uppercase means an component that I have create, lowercase means use a dom element
- No sibling components
  return ( h1() div()) - BAD
 */
const App = () => (
  /*
  Router has server routes. History is how back and forward buttons work.
  Using hash history for now
  */
  <Router history={hashHistory}>
    {/* Individual routes in here */}
    <Route path="/" component={Landing} />
    <Route path="/search" component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
