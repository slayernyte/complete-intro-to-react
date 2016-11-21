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
const App = () => (
  /*
  Router has server routes. History is how back and forward buttons work.
  Using hash history for now
  */
  <Router history={hashHistory}>
    {/* Nested Routes, we now have our layout wrapping the rest of the routes */}
    <Route path="/" component={Layout}>
      {/* We need to change this becasue the paths are the same as the parent
      so we use IndexRoute and get rid of pathe to show that this componet
      is loaded for the "index" */}
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} shows={shows} />
      <Route path='/details/:id' component={Details} />

    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
