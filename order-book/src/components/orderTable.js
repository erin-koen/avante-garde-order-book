import React from 'react'
import { Table } from 'reactstrap'

const orderTable = props => {
  let prices = []
  props.bids ? (prices = props.bids.reverse()) : (prices = props.asks)
  return (
    <Table hover size='sm'>
      <thead>
        <tr>
          {props.bids ? <th>BIDS</th> : <th>OFFERS</th>}
          <th>Amount At Level</th>
          <th>Total Available</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(price => (
          <tr>
            <th scope='row'>{price.count}</th>
            <td>{price.amount}</td>
            <td>{price.y}</td>
            <td>{price.x}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default orderTable
