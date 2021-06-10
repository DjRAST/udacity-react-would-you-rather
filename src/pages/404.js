import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <Fragment>
        <div>This page does not exist.</div>
        <div>Back to <NavLink to="/">Home Page</NavLink></div>
      </Fragment>
    );
  }
}

export default NotFoundPage;