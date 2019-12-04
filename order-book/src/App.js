import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Spinner, Button } from 'reactstrap'

import OrderBook from './components/orderBook.js'
import OrderTable from './components/orderTable.js'
import { updateBook } from './actions/actions.js'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  async componentDidMount () {
    await this.props.updateBook()
    this.updateInterval = setInterval(() => this.props.updateBook(), 500)
  }

  componentWillUnmount() {
    this.stopUpdates()
  }

  stopUpdates = () => {
    clearInterval(this.updateInterval)
    this.updateInterval = null
  }

  render () {
    if (this.props.bids.length > 0) {
      return (
        <>
        <Button onClick={()=>this.stopUpdates()}>Stop Updates</Button>
        <div className='bookContainer'>
          <OrderTable bids={this.props.bids} asks={null} />
          <OrderBook />
          <OrderTable asks={this.props.asks} bids={null} />
        </div>
        </>
      )
    } else {
      return (
        <div>
          <Spinner color='primary' />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    bids: state.prices.bids,
    asks: state.prices.asks
  }
}

export default connect(
  mapStateToProps,
  {
    updateBook
  }
)(App)
