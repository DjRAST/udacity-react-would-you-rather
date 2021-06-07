import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { getInitialData } from '../actions/common'

import LoadingBar from 'react-redux-loading'
import { Container, Box } from '@material-ui/core'
import HeaderNav from './HeaderNav'
import ProtectedRoute from '../components/ProtectedRoute'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import CreatePollPage from '../pages/CreatePoll'
import LeaderboardPage from '../pages/Leaderboard'
import NotFoundPage from '../pages/404'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData())
  }

  render () {
    const { isLoading } = this.props

    return (
      <Router>
        <Fragment>
          <header>
            <HeaderNav />
          </header>
          <LoadingBar />
          { isLoading
            ? null
            : <Container>
                <Box pt={4}>
                  <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <ProtectedRoute path="/" exact component={HomePage} />
                    <ProtectedRoute path="/add" exact component={CreatePollPage} />
                    <ProtectedRoute path="/leaderboard" exact component={LeaderboardPage} />
                    <Route path="/404" exact component={NotFoundPage} />
                    <Redirect to="/404" />
                  </Switch>
                </Box>
              </Container>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ loadingBar }) {
  return {
    isLoading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(App)
