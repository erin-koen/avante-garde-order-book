
import axios from 'axios'

const proxyUrl = `https://cors-anywhere.herokuapp.com/`
const baseUrl = `https://api.kraken.com/0/public/Depth?`
const pair = `pair=xbtusd`
const count = `&count=50`

const url = proxyUrl + baseUrl + pair + count

export const UPDATE_BOOK = 'UPDATE_BOOK'
export const FETCHING = 'FETCHING'
export const FAILURE = 'FAILURE'

export const updateBook = () => dispatch => {

  axios
    .get(url)
    .then(res => {
      dispatch({ type: UPDATE_BOOK, payload: res.data.result })
    })
    .catch(error => dispatch({ type: FAILURE, payload: error }))
}
