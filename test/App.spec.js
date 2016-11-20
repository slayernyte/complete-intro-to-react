/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow } = require('enzyme')
const {shows} = require('../public/data')

describe('<Search />', () => {
  it('should render brand', () => {
    const wrapper = shallow(<Search/>)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true
  })
  it('should render shows availible in the data', () => {
    const wrapper = shallow(<Search/>)
    // find showcard in the search comp
    // does the number of show cards rendered equal the length of shows
    // no angle brackets on showcard because then it would look for an
    // empty component with no props <ShowCard />
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
})
