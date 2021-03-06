import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    const {auth, component, ...rest} = this.props;

    return auth
      ? <Route {...rest} component={component}/>
      : <Route {...rest} render={({location}) => (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location},
          }}
        />
      )}/>;
  }
}

function mapStateToProps({auth}) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);