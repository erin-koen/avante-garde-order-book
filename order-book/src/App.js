import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import OrderBook from './components/orderBook.js'
import { updateBook } from './actions/actions.js'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  async componentDidMount () {
    await this.props.updateBook()
    this.updateInterval = setInterval(this.props.updateBook(), 500)

  }

  render () {
    if (this.props.bids.length > 0) {
      return <OrderBook bids={this.props.bids} asks={this.props.asks} />
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
