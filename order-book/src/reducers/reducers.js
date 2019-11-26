import { UPDATE_BOOK, FETCHING, FAILURE } from '../actions/actions.js'

const initialState = {
  bids: [],
  asks: [],
  fetching: false,
  error: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOK:
      console.log('in reducer', action.payload.XXBTZUSD.bids)
      return {
        ...state,
        bids: action.payload.XXBTZUSD.bids,
        asks: action.payload.XXBTZUSD.asks
      }
    // do work and update state
    default:
      return state
  }
}

export default reducer
