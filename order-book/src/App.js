import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import OrderBook from './components/orderBook.js'
import { updateBook } from './actions/actions.js'

class App extends React.Component {
  constructor () {
    super()
  }

  async componentDidMount () {
    await this.props.updateBook()
  }

  render () {
    if (this.props.prices.length > 0) {
      return <OrderBook prices={this.props.prices} />
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
    prices: state.prices
  }
}

export default connect(
  mapStateToProps,
  {
    updateBook
  }
)(App)
