import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Box, Paper } from '@material-ui/core';
import { AvatarImage, CardHeader } from '../styles/question';
import AnsweredQuestion from '../components/answeredQuestion';
import QuestionForm from '../components/questionForm';
import { questionAnswered } from '../actions/common';

class QuestionDetailPage extends Component {
  hasUserAnsweredQuestion = (userId, question) => (
    question.optionOne.votes.includes(userId) ||
    question.optionTwo.votes.includes(userId)
  );

  onQuestionAnswered = (selectedOption) => {
    const {dispatch, auth, question} = this.props;
    dispatch(questionAnswered(auth, question.id, selectedOption));
  };

  render() {
    const {
      hasInvalidId,
      question,
      avatarURL,
      auth,
    } = this.props;

    if (hasInvalidId) {
      return (
        <Redirect to="/404"/>
      );
    }

    const hasUserAnsweredQuestion = this.hasUserAnsweredQuestion(auth, question);

    return (
      <Paper>
        <CardHeader p={1}><h1>Poll by {question.author}</h1></CardHeader>
        <Box p={1} display="flex" flexDirection="row">
          <Box p={2}><AvatarImage src={avatarURL}/></Box>
          <Box p={2}>
            {hasUserAnsweredQuestion
              ? <AnsweredQuestion question={question} userId={auth}/>
              : <QuestionForm question={question} onQuestionAnswered={this.onQuestionAnswered}/>
            }
          </Box>
        </Box>
      </Paper>
    );
  }
}

function mapStateToProps({questions, users, auth}, props) {
  const {question_id} = props.match.params;
  const hasInvalidId = !questions[question_id];
  const question = hasInvalidId ? null : questions[question_id];
  const avatarURL = hasInvalidId ? null : users[question.author].avatarURL;

  return {
    hasInvalidId,
    question,
    avatarURL,
    auth,
  };
}

export default connect(mapStateToProps)(QuestionDetailPage);