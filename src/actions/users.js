export const SET_USERS = 'SET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION_FOR_USER = 'ADD_QUESTION_FOR_USER'

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const addAnswer = (userId, questionId, option) => ({
  type: ADD_ANSWER,
  userId,
  questionId,
  option,
})

export const addQuestionForUser = (userId, questionId) => ({
  type: ADD_QUESTION_FOR_USER,
  userId,
  questionId,
})