const React = require('react')
const {Link} = require('react-router')
/*
 - Uppercase means an component that I have create, lowercase means use a dom element
 - No sibling components
 return ( h1() div()) - BAD
 */
const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input type='text' className='search' placeholder='search' />
    {/* Internal to react-router, takes care of "magic" for you */}
    <Link to='/search' className='browse-all'> or browse all</Link>
  </div>
)

module.exports = Landing
