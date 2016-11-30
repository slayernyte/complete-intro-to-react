const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

// default param value
const rootReducer = (state = initialState, action) => { // default param
  switch (action.type) {
  case SET_SEARCH_TERM:
      // TODO: Why not just pass the action.value, why pass the whole action object?
      return reduceSearchTerm(state, action)

    default: // must return something or your state gets blown away
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
  searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
