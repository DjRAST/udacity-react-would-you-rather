import React, { Component } from 'react'
import { styled, Box, Button, Paper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { QuestionsType } from '../api/model'

export const questionsPreviewListPropTypes = {
  questions: QuestionsType.isRequired,
}

const Question = styled(Paper)({
  marginBottom: 24,
})

const QuestionHeader = styled(Box)({
  background: 'lightblue',
})

const Italic = styled(Box)({
  fontStyle: 'italic',
})

const Answer = styled(Box)({
  fontWeight: 'bold'
})

class QuestionsPreviewList extends Component {
  render () {
    const { questions } = this.props

    return (
      questions.map((question) => (
        <Question key={question.id}>
          <QuestionHeader p={1}>
            <h3>Poll by {question.author}</h3>
          </QuestionHeader>
          <Box p={1}>
            <h3>Would you rather?</h3>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Box>
                <Answer>{question.optionOne.text}</Answer>
                <Italic>or</Italic>
                <Answer>{question.optionTwo.text}</Answer>
              </Box>
              <Box>
                <Button variant="outlined"><NavLink to={`/questions/${question.id}`}>Go to Poll</NavLink></Button>
              </Box>
            </Box>
          </Box>
        </Question>
    ))
    )
  }
}

QuestionsPreviewList.propTypes = questionsPreviewListPropTypes

export default QuestionsPreviewList