const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className="container" style={{'text-align': 'left'}}>
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
}

module.exports = Details
