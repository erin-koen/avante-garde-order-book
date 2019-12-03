import React from 'react'
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis'

const OrderBook = props => {
  console.log(props)
  return (
    // make container div responsive
    <div>
      <FlexibleXYPlot margin={{ left: 75 }} width={1200} height={900}>
        <HorizontalGridLines />
        <AreaSeries data={props.bids} fill='#00ff00' />
        <AreaSeries data={props.asks} fill='#ff0000' />
        <XAxis title='price (USD)' tickTotal={6} />
        <YAxis title='available size (BTC)' />
      </FlexibleXYPlot>
    </div>
  )
}

export default OrderBook
