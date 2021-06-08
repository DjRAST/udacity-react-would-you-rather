export const SET_USERS = 'SET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

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