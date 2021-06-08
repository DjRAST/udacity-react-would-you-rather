import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { QuestionType } from '../api/model'
import { styled, Box, Paper, Badge } from '@material-ui/core'

const answeredQuestionPropTypes = {
  question: QuestionType.isRequired,
  userId: PropTypes.string.isRequired,
}

const AnswerContainer = styled(Paper)({
  marginBottom: 12,
  backgroundColor: 'lightblue',
})

class AnsweredQuestion extends Component {
  render () {
    const { question, userId } = this.props

    const numberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const votes = [
      {
        text: question.optionOne.text,
        votes: question.optionOne.votes.length,
        percentage: (question.optionOne.votes.length / numberOfVotes * 100).toFixed(1),
        isUserChoice: question.optionOne.votes.includes(userId),
      },
      {
        text: question.optionTwo.text,
        votes: question.optionTwo.votes.length,
        percentage: (question.optionTwo.votes.length / numberOfVotes * 100).toFixed(1),
        isUserChoice: question.optionTwo.votes.includes(userId),
      },
    ]

    return (
      <Fragment>
        <h4>Results</h4>
        {
          votes.map((vote) => (
            <AnswerContainer key={vote.text}>
              {
                vote.isUserChoice &&
                <Badge color='secondary' badgeContent='Choice' />
              }
              <Box p={1}>
                <Box mb={1}>{`Would you rather ${vote.text}?`}</Box>
                <Box mb={1}>{`${vote.votes} votes (${vote.percentage}%)`}</Box>
              </Box>
            </AnswerContainer>
          ))
        }
      </Fragment>
    )
  }
}

AnsweredQuestion.propTypes = answeredQuestionPropTypes

export default AnsweredQuestion