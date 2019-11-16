import { UPDATE_BOOK } from '../actions/actions.js'

const initialState = {
  book: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOK:
      return
    // do work and update state
    default:
      return state
  }
}

export default reducer
