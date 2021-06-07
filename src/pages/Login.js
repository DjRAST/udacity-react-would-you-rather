import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styled } from '@material-ui/core/styles'

import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { login } from '../actions/auth'

const LoginSelectBox = styled(Select)({
  width: 250,
})

class LoginPage extends Component {
  state = {
    selectedUser: '',
  }

  onUserSelected = (event) => {
    const { dispatch, location, history } = this.props
    const prevUrl = location?.state?.from || '/'
    const selectedUserId = event.target.value

    this.setState({
      selectedUser: selectedUserId
    })
    dispatch(login(selectedUserId))
    history.replace(prevUrl)
  }

  render () {
    const { users } = this.props
    const { selectedUser } = this.state

    return (
      <Box mt={6}>
        <h1>Login</h1>
        <FormControl variant="filled">
          <InputLabel>Choose User</InputLabel>
          <LoginSelectBox
            id='login-select'
            value={selectedUser}
            onChange={this.onUserSelected}
          >
            {users.map((user) => (
              <MenuItem
                key={user.id}
                value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </LoginSelectBox>
        </FormControl>
      </Box>
    )
  }
}

function mapStateToProps ({ users }) {
  const userArray = Object.keys(users).map((userId) => users[userId])

  return {
    users: userArray,
  }
}

export default connect(mapStateToProps)(LoginPage)