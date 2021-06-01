import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { logout } from '../actions/auth'
import { NavLink } from 'react-router-dom'

const HeaderButton = styled(Button)({
  marginRight: 12,
})

const LogoutButton = styled(Button)({
  position: 'absolute',
  right: 24,
})

class HeaderNav extends Component {
  onLogout = () => {
    this.props.dispatch(logout())
    // TODO: route to login page
  }

  render () {
    const { auth } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <HeaderButton variant="contained">
            <NavLink to='/'>
              Home
            </NavLink>
          </HeaderButton>
          <HeaderButton variant="contained">
            <NavLink to='/add'>
              Create Poll
            </NavLink>
          </HeaderButton>
          <HeaderButton variant="contained">
            <NavLink to='/leaderboard'>
              Leaderboard
            </NavLink>
          </HeaderButton>


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