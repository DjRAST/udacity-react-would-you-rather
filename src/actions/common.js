import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../api/_DATA'

import { setUsers, addAnswer } from './users'
import { setQuestions, answerQuestion } from './questions'

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => {
        dispatch(setUsers(users))
        dispatch(setQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export const questionAnswered = (authedUser, qid, answer) => {
  return (dispatch) => {
    dispatch(showLoading())
    _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
      dispatch(answerQuestion(authedUser, qid, answer))
      dispatch(addAnswer(authedUser, qid, answer))
      dispatch(hideLoading())
    })
  }
}