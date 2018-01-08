import { combineReducers, createStore } from 'redux'

function createReducers() {
  const reducers = { }
  return combineReducers(reducers)
}

const store = createStore(createReducers, {})

export default store
