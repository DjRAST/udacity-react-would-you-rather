import { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import HeaderNav from './HeaderNav'
import LoadingBar from 'react-redux-loading'

import { getInitialData } from '../actions/common'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData())
  }

  render () {
    return (
      <Fragment>
        <header>
          <HeaderNav />
        </header>
        <LoadingBar />
      </Fragment>
    )
  }
}

export default connect()(App)
