import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis'

const OrderBook = (props) => {
  return (
    <div>
      <XYPlot
       width={900}
       height={900}
       >
         <HorizontalGridLines/>
         <VerticalBarSeries data={props.prices}/>
         <XAxis title="price"/>
         <YAxis title="available size"/>


      </XYPlot>
    </div>
  );
};

export default OrderBook;