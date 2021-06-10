import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../api/_DATA'

import * as userActions from './users'
import * as questionsActions from './questions'

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => {
        dispatch(userActions.setUsers(users))
        dispatch(questionsActions.setQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export const questionAnswered = (authedUser, qid, answer) => {
  return (dispatch) => {
    dispatch(showLoading())
    _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
      dispatch(questionsActions.answerQuestion(authedUser, qid, answer))
      dispatch(userActions.addAnswer(authedUser, qid, answer))
      dispatch(hideLoading())
    })
  }
}

export const questionAdded = (author, optionOneText, optionTwoText) => {
  return (dispatch) => {
    _saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    }).then((newQuestion) => {
      dispatch(questionsActions.addQuestion(newQuestion))
      dispatch(userActions.addQuestionForUser(author, newQuestion.id))
    })
  }
}