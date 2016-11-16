const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')
/*
- Uppercase means an component that I have create, lowercase means use a dom element
- No sibling components
  return ( h1() div()) - BAD
 */
const MyFirstComponent = () => (
  <div>
    <MyTitle title='Whateves' color="rebeccaPurple" />
    <MyTitle title='Yep' color="deepPink" />
    <MyTitle title='Yep i guess so' color="#f0gdo6" />
  </div>
)


ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
