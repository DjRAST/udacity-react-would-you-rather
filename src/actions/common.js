import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions } from '../api/_DATA'

import { setUsers } from './users'
import { setQuestions } from './questions'

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => {
        // TODO: add actions & reducers
        dispatch(setUsers(users))
        dispatch(setQuestions(questions))
        dispatch(hideLoading())
      })
  }
}