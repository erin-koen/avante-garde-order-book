import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import {
  Spinner,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import OrderBook from './components/orderBook.js'
import OrderTable from './components/orderTable.js'
import { updateBook } from './actions/actions.js'

class App extends React.Component {
  componentDidMount () {
    this.startUpdates()
  }

  componentWillUnmount () {
    this.stopUpdates()
  }

  startUpdates = () => {
    this.updateInterval = setInterval(() => this.props.updateBook(), 5000)
  }

  stopUpdates = () => {
    clearInterval(this.updateInterval)
    this.updateInterval = null
  }

  render () {
    if (this.props.error) {
      return (
        <div>
            <Modal isOpen={this.props.error}>
              <ModalHeader>Whoops</ModalHeader>
              <ModalBody>
                We've swamped the Coinbase endpoint and it's not accepting more
                requests at the moment. Press the stop button below and wait a
                few minutes. Then press the Start button. I promise to fix this
                going forward.
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onClick={() => this.stopUpdates()}>
                  Stop Updating
                </Button>{' '}
                <Button color='secondary' onClick={() => this.startUpdates()}>
                  Start Updating
                </Button>
              </ModalFooter>
            </Modal>
          </div>
      )
    } else if (this.props.bids.length > 0) {
      return (
        <>
          <div>
            <Button
              className='control-button'
              onClick={() => this.stopUpdates()}
            >
              Stop Updates
            </Button>
            <Button
              className='control-button'
              onClick={() => this.startUpdates()}
            >
              Start Updates
            </Button>
            <div className='bookContainer'>
              <OrderTable bids={this.props.bids} asks={null} />
              <OrderBook />
              <OrderTable asks={this.props.asks} bids={null} />
            </div>
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
    asks: state.prices.asks,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    updateBook
  }
)(App)
