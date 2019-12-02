import axios from 'axios'
import {axiosWithoutAuth} from '../config/AxiosConfig'

const proxyUrl = `https://cors-anywhere.herokuapp.com/`
const baseUrl = `https://api.kraken.com/0/public/Depth?`
const pair = `pair=xbtusd`
const count = `&count=50`

const url = proxyUrl + baseUrl + pair + count

export const UPDATE_BOOK = 'UPDATE_BOOK'
export const FETCHING = 'FETCHING'
export const FAILURE = 'FAILURE'

export const updateBook = () => dispatch => {
  console.log('before')
  axiosWithoutAuth()
    .get(url)
    .then(res => {
      // instantiate bid sum and ask sum to zero
      // res.data.result.XXBTZUSD. bids/asks => hard code for now
      // create dictionary where key = price and value = sum
      let bidSum = 0
      let askSum = 0
      let prices = []

      // add bids to array
      res.data.result.XXBTZUSD.bids.forEach(bid => {
        let price = parseFloat(bid[0])
        let amount = parseFloat(bid[1])
        bidSum += amount
        const priceObj = {
          color: '#00ff00',
          x: price,
          y: bidSum 
        }
        prices.push(priceObj)
      })

      // reverse array to get bids in correct order
      prices.reverse()

      // add asks to array
      res.data.result.XXBTZUSD.asks.forEach(ask => {
        let price = parseFloat(ask[0])
        let amount = parseFloat(ask[1])
        askSum += amount
        const priceObj = {
          color: 'red',
          x: price,
          y: askSum
        }
        prices.push(priceObj)
      })
      console.log(prices)
      dispatch({ type: UPDATE_BOOK, payload: prices })
    })
    .catch(error => dispatch({ type: FAILURE, payload: error }))
  console.log('after')
}
