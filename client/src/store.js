import { createStore } from 'redux'
import dummyEventList from './dummyEventList.json'

function reducer(state = [...dummyEventList], action) {
  switch (action.type) {
    case 'event/added':
      return [ ...state, action.inputs ]
    case 'event/deleted':
      return state.filter(event => event.id !== action.id )
    default:
      return state
  }
}

let store = createStore(reducer)

export default store;