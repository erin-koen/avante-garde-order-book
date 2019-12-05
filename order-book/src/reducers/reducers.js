import { UPDATE_BOOK, FAILURE } from '../actions/actions.js'

const initialState = {
  prices: {
    bids: [],
    asks: []
  },
  fetching: false,
  error: null
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOK:
      return {
        ...state,
        prices: {
          bids: action.payload.bids,
          asks: action.payload.asks
        },
        error: false
      }

    default:
      return state
    
    case FAILURE:
      console.log(action.payload)
      return {
        ...state,
        error: true
      }
  }
}

export default reducer
