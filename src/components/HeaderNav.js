import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styled } from '@material-ui/core/styles'
import { AppBar, Avatar, Box, Button, Toolbar } from '@material-ui/core'
import { logout } from '../actions/auth'
import { NavLink } from 'react-router-dom'

const HeaderButton = styled(Button)({
  marginRight: 12,
})

const LoginInfoContainer = styled(Box)({
  position: 'absolute',
  right: 24,
  display: 'flex',
  alignItems: 'center',
})

const LoginInfoElement = styled(Box)({
  display: 'inline',
  marginLeft: 24
})

class HeaderNav extends Component {
  onLogout = () => {
    this.props.dispatch(logout())
  }

  render () {
    const { auth, username, avatarURL } = this.props

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
            <LoginInfoContainer>
              <LoginInfoElement>{username}</LoginInfoElement>
              <LoginInfoElement><Avatar alt='user avatar' src={avatarURL} /></LoginInfoElement>
              <LoginInfoElement>
                <Button variant="contained" onClick={this.onLogout}>Logout</Button>
              </LoginInfoElement>
            </LoginInfoContainer>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps ({ auth, users }) {
  const username = auth ? users[auth].name : ''
  const avatarURL = auth ? users[auth].avatarURL : ''

  return {
    auth,
    username,
    avatarURL,
  }
}

export default connect(mapStateToProps)(HeaderNav)