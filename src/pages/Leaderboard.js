import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Paper } from '@material-ui/core'
import { CardHeader, AvatarImage } from '../styles/question'

class LeaderboardPage extends Component {
  render() {
    const { sortedUsers } = this.props

    return (
      <Paper>
        <CardHeader p={1}><h1>Leaderboard!</h1></CardHeader>
        { sortedUsers.map((user) => (
          <Box mb={2} p={2} key={user.id}>
            <Paper>
              <Box p={1} display="flex" flexDirection="row">
                <Box p={2}><AvatarImage src={user.avatarURL} /></Box>
                <Box p={2} flexGrow={1}>
                  <h2>{user.name}</h2>
                  <Box mt={1}>{`${user.questions.length} Polls started`}</Box>
                  <Box mt={1}>{`${Object.keys(user.answers).length} Polls answered`}</Box>
                </Box>
                <Box>
                  <h2>{`Final Score: ${user.questions.length + Object.keys(user.answers).length}`}</h2>
                </Box>
              </Box>
            </Paper>
          </Box>
        ))
        }
      </Paper>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    sortedUsers: Object.values(users).sort((userA, userB) => {
      const userAScore = Object.keys(userA.answers).length + userA.questions.length
      const userBScore = Object.keys(userB.answers).length + userB.questions.length
      return userBScore - userAScore
    }),
  }
}

export default connect(mapStateToProps)(LeaderboardPage)