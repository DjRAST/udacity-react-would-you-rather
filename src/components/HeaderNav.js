import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { logout } from '../actions/auth'

const HeaderButton = styled(Button)({
  marginRight: 12,
})

const LogoutButton = styled(Button)({
  position: 'absolute',
  right: 24,
})

class HeaderNav extends Component {
  onLogout = () => {
    // TODO: dispatch asynchronous logout action
    this.props.dispatch(logout())
  }

  render () {
    const { auth } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <HeaderButton variant="contained">Home</HeaderButton>
          <HeaderButton variant="contained">Create Poll</HeaderButton>
          <HeaderButton variant="contained">Leaderboard</HeaderButton>
          { auth && (
            <LogoutButton variant="contained" onClick={this.onLogout}>Logout</LogoutButton>
          )}
        </Toolbar>
      </AppBar>
    )
  }

    // <nav className='nav'>
    //   <ul>
    //     <li>
    //       <NavLink to='/' exact activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/new' activeClassName='active'>
    //         New Tweet
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
}

function mapStateToProps ({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(HeaderNav)