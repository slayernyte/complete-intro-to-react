const React = require('react')

const ShowCard = (props) => (
  <div className="show-card">
    <img src={`public/img/posters/${props.show.poster}`} alt="" className="show-card-img" />
    <div className="show-card-text">
      <h3 className="show-card-title">{props.show.title}</h3>
      <h4 className="show-card-year">({props.show.year})</h4>
      <p className="show-card-description">{props.show.description}</p>
    </div>
  </div>

)

// Consider stripping proptypes in production, there are useless to the end user
ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}

module.exports = ShowCard
