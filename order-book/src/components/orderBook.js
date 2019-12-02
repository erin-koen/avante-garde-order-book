import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, AreaSeries} from 'react-vis'

const OrderBook = (props) => {
  console.log(props)
  return (
    <div>
      <XYPlot
      margin={{left:75}}
       width={1200}
       height={900}
       >
         <HorizontalGridLines/>
         <AreaSeries margin={75} data={props.bids} fill='#00ff00'/>
         <AreaSeries margin={75} data={props.asks} fill='#ff0000'/>
         <XAxis title="price (USD)" tickTotal={6}/>
         <YAxis title="available size (BTC)"/>


      </XYPlot>
    </div>
  );
};

export default OrderBook;