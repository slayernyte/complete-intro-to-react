/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const {shows} = require('../public/data')

describe('<Search />', () => {
  it('should render brand', () => {
    const wrapper = shallow(<Search />)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })
  it('should render shows availible in the data', () => {
    const wrapper = shallow(<Search />)
    // find showcard in the search comp
    // does the number of show cards rendered equal the length of shows
    // no angle brackets on showcard because then it would look for an
    // empty component with no props <ShowCard />
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly based on the state of the search', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    // indirect testing - not he best test
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
