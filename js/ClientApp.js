var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div({style: {color: 'red'}},
    MyTitleFactory({
      title: 'props are cool',
      color: 'rebeccapurple'
    }), // same as React.createElement(MyTitle, null)
    React.createElement(MyTitle, {
      title: 'hey now props',
      color: 'peru'
    })
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
