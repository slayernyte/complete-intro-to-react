const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } = require('react-router')

match({history: App.History, routes: App.Routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('Browser Entry Error', error)
  }

  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})

