import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Avatar, Box, Paper, styled } from '@material-ui/core'
import { CardHeader } from '../styles/question'
import AnsweredQuestion from '../components/answeredQuestion'
import QuestionForm from '../components/questionForm'
import { questionAnswered } from '../actions/common'

const AvatarImage = styled(Avatar)({
  width: 150,
  height: 150,
})

class QuestionDetailPage extends Component {
  hasUserAnsweredQuestion = (userId, question) => (
    question.optionOne.votes.includes(userId) ||
    question.optionTwo.votes.includes(userId)
  )

  onQuestionAnswered = (selectedOption) => {
    const { dispatch, auth, question } = this.props
    dispatch(questionAnswered(auth, question.id, selectedOption))
  }

  render() {
    const {
      hasInvalidId,
      question,
      avatarURL,
      auth,
    } = this.props

    if (hasInvalidId) {
      return (
        <Redirect to="/404" />
      )
    }

    const hasUserAnsweredQuestion = this.hasUserAnsweredQuestion(auth, question)

    return (
      <Fragment>
        <h1>Question Details</h1>
        <Paper>
          <CardHeader p={1}><h3>Poll by {question.author}</h3></CardHeader>
          <Box p={1} display="flex" flexDirection="row">
            <Box p={2}><AvatarImage src={avatarURL} /></Box>
            <Box p={2}>
              { hasUserAnsweredQuestion
                ? <AnsweredQuestion question={question} userId={auth} />
                : <QuestionForm question={question} onQuestionAnswered={this.onQuestionAnswered} />
              }
            </Box>
          </Box>
        </Paper>
      </Fragment>
    )
  }
}

function mapStateToProps ({ questions, users, auth }, props) {
  const { question_id } = props.match.params
  const hasInvalidId = !questions[question_id]
  const question = hasInvalidId ? null : questions[question_id]
  const avatarURL = hasInvalidId ? null: users[question.author].avatarURL

  return {
    hasInvalidId,
    question,
    avatarURL,
    auth,
  }
}

export default connect(mapStateToProps)(QuestionDetailPage)