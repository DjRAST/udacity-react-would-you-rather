import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Box, Button, Paper, TextField } from '@material-ui/core'

import { questionAdded } from '../actions/common'
import { CardHeader } from '../styles/question'

class CreateQuestionPage extends Component {
  state = {
    optionA: '',
    optionB: '',
    toHome: false,
  }

  optionAChanged = (event) => {
    this.setState({
      optionA: event.target.value
    })
  }

  optionBChanged = (event) => {
    this.setState({
      optionB: event.target.value
    })
  }

  onSubmit = () => {
    const { dispatch, auth } = this.props

    dispatch(questionAdded(auth, this.state.optionA, this.state.optionB))
    this.setState({
      toHome: true,
    })
  }

  render() {
    const isButtonDisabled = this.state.optionA.length === 0 || this.state.optionB.length === 0

    if (this.state.toHome) {
      return <Redirect to="/" />
    }

    return (
      <Fragment>
        <h1>Create Poll</h1>
        <Paper>
          <CardHeader p={1}><h3>New Poll</h3></CardHeader>
          <Box p={1}>
            <Box mb={1}>Would you rather:</Box>
            <TextField
              value={this.state.optionA}
              label="Option A"
              variant="outlined"
              fullWidth
              onChange={this.optionAChanged}
            />
            <Box mb={1} mt={1}>or</Box>
            <TextField
              value={this.state.optionB}
              label="Option B"
              variant="outlined"
              fullWidth
              onChange={this.optionBChanged}
            />
            <Box mt={3}>
              <Button
                variant='contained'
                disabled={isButtonDisabled}
                fullWidth
                onClick={this.onSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Fragment>
    )
  }
}

function mapStateToProps ({ auth }) {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(CreateQuestionPage)