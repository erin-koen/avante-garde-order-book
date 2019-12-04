import axios from 'axios'
import { axiosWithoutAuth } from '../config/AxiosConfig'

const proxyUrl = `https://cors-anywhere.herokuapp.com/`
const baseUrl = `https://api.kraken.com/0/public/Depth?`
const pair = `pair=xbtusd`
const count = `&count=50`

const cbBase = 'https://api.pro.coinbase.com'
const cbPair = 'BTC-USD'

const url = proxyUrl + baseUrl + pair + count
const cbUrl = `${proxyUrl}${cbBase}/products/${cbPair}/book?level=2`
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const FETCHING = 'FETCHING'
export const FAILURE = 'FAILURE'

export const updateBook = () => dispatch => {
  console.log('calling coinbase ring ring')
  axiosWithoutAuth()
    .get(cbUrl)
    .then(res => {
      // instantiate bid sum and ask sum to zero
      // res.data.result.XXBTZUSD. bids/asks => hard code for now
      // create dictionary where key = price and value = sum
      let bidSum = 0
      let askSum = 0
      let prices = {
        bids: [],
        asks: []
      }

      // add bids to array
      res.data.bids.forEach(bid => {
        let price = parseInt(bid[0])
        let amount = parseInt(bid[1])
        let bids = bid[2]
        bidSum += amount
        const priceObj = {
          color: '#00ff00',
          x: price,
          y: bidSum,
          amount: amount,
          count: bids
        }
        prices.bids.push(priceObj)
      })

      // reverse array to get bids in correct order
      prices.bids.reverse()

      // add asks to array
      res.data.asks.forEach(ask => {
        let price = parseInt(ask[0])
        let amount = parseInt(ask[1])
        let offers = ask[2]
        askSum += amount
        const priceObj = {
          color: '#ff0000',
          x: price,
          y: askSum,
          amount: amount,
          count: offers
        }
        prices.asks.push(priceObj)
      })

      dispatch({ type: UPDATE_BOOK, payload: prices })
    })
    .catch(error => {console.log(error)
    dispatch({ type: FAILURE, payload: error })})
}
