const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: '',
  shows: shows
}

// default param value
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    // must return something or your state gets blown away
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

// create store

// const store = redux.createStore(rootReducer)
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  shows: state.shows
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
