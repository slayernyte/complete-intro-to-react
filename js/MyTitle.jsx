/**
 * @deprecated
 */
const React = require('react')
// anything that you can put on the right side of an assignment can go
// in the curly braces
const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1 style={ {color: this.props.color} }>
          { this.props.title.toUpperCase() }
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
