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
export const FAILURE = 'FAILURE'

const stringToFloat = str => {
  // take input string, cut it to four decimal places, return it as a float
  const sliceIndex = str.indexOf('.') + 5
  return parseFloat(str.slice(0, sliceIndex))
}

export const updateBook = () => dispatch => {
  console.log('calling coinbase ring ring')
  axiosWithoutAuth()
    .get(cbUrl)
    .then(res => {
      // instantiate bid sum and ask sum to zero

      let bidSum = 0
      let askSum = 0
      let prices = {
        bids: [],
        asks: []
      }

      // add bids to array
      res.data.bids.forEach(bid => {
        let price = parseFloat(bid[0])
        console.log(price)
        let amount = stringToFloat(bid[1])
        console.log(amount)
        let bids = bid[2]
        bidSum += amount
        const priceObj = {
          color: '#00ff00',
          x: price,
          y: stringToFloat(bidSum.toString()),
          amount: amount,
          count: bids
        }
        prices.bids.push(priceObj)
      })

      // reverse array to get bids in correct order
      prices.bids.reverse()

      // add asks to array
      res.data.asks.forEach(ask => {
        let price = parseFloat(ask[0])
        let amount = stringToFloat(ask[1])
        let offers = ask[2]
        askSum += amount
        const priceObj = {
          color: '#ff0000',
          x: price,
          y: stringToFloat(askSum.toString()),
          amount: amount,
          count: offers
        }
        prices.asks.push(priceObj)
      })

      dispatch({ type: UPDATE_BOOK, payload: prices })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: FAILURE, payload: error })
    })
}
