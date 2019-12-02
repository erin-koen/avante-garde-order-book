import { UPDATE_BOOK, FETCHING, FAILURE } from '../actions/actions.js'

const initialState = {
  prices: {
    bids:[],
    asks:[]
  },
  fetching: false,
  error: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOK:
      console.log(action.payload)
      return {
        ...state,
        prices: {
          bids: action.payload.bids,
          asks: action.payload.asks
        }

      }

    default:
      return state
  }
}

export default reducer
