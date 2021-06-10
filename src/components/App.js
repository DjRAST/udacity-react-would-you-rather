import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { getInitialData } from '../actions/common';

import LoadingBar from 'react-redux-loading';
import { Box, Container } from '@material-ui/core';
import HeaderNav from './HeaderNav';
import ProtectedRoute from '../components/ProtectedRoute';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import CreateQuestionPage from '../pages/CreateQuestion';
import LeaderboardPage from '../pages/Leaderboard';
import QuestionDetail from '../pages/QuestionDetail';
import NotFoundPage from '../pages/404';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    const {isLoading} = this.props;

    return (
      <Router>
        <Fragment>
          <header>
            <HeaderNav/>
          </header>
          <LoadingBar/>
          {isLoading
            ? null
            : <Container>
              <Box pt={4}>
                <Switch>
                  <Route path="/login" exact component={LoginPage}/>
                  <ProtectedRoute path="/" exact component={HomePage}/>
                  <ProtectedRoute path="/add" exact component={CreateQuestionPage}/>
                  <ProtectedRoute path="/leaderboard" exact component={LeaderboardPage}/>
                  <ProtectedRoute path="/questions/:question_id" exact component={QuestionDetail}/>
                  <Route path="/404" exact component={NotFoundPage}/>
                  <Redirect to="/404"/>
                </Switch>
              </Box>
            </Container>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({loadingBar}) {
  return {
    isLoading: loadingBar.default === 1,
  };
}

export default connect(mapStateToProps)(App);
