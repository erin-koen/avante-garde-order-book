import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

import { updateBook } from './actions/actions.js'

class App extends React.Component {
  constructor(){
    super();
  }

  async componentDidMount() {
    console.log(this.props)
    await this.props.updateBook()  
    console.log('after', this.props)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bids: state.bids,
    asks: state.asks
  }
}

export default connect(
  mapStateToProps,
  {
    updateBook
  }
)(App)

