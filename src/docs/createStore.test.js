import { createStore } from 'redux'

describe('createStore', () => {
  describe('store', () => {
    it('returns an object of the complete state of your app', () => {
      //arrange
      const initialState = { author: 'Anton Hallstrom' }
      const reducer = (state = {}, action) => {
        switch (action.type) {
          case 'FOO':
            return Object.assign({}, state, {
              text: action.payload
            })
          default:
            return state
        }
      }
      //act
      const store = createStore(reducer, initialState)

      store.dispatch({
        type: 'FOO',
        payload: 2018
      })

      const state = store.getState()
     //assert
      expect(state).toBeDefined()
      expect(state.text).toBe(2018)
      expect(state.author).toBe(initialState.author)
    })
  })
})
