const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')
/*
- Uppercase means an component that I have create, lowercase means use a dom element
- No sibling components
  return ( h1() div()) - BAD
 */
const App = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">svideo</h1>
      <input type="text" className="search" placeholder="search"/>
      <button className="browse-all"> or browse all</button>
    </div>
  </div>
)


ReactDOM.render(<App/>, document.getElementById('app'))
