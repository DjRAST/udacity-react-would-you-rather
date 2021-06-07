import React, { Component } from 'react'
import { Box } from '@material-ui/core'

class QuestionsPreviewList extends Component {

  render () {
    return (
      this.props.questions.map((question) => (
        <Box pt={1} pb={1}>
          <div>{question.author}</div>
          <div>{question.optionOne.text}</div>
        </Box>
    ))
    )
  }
}

export default QuestionsPreviewList