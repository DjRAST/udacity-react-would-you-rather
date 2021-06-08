import { SET_USERS, ADD_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    case ADD_ANSWER:
      const {userId, questionId, option} = action
      const updatedUser = {...state[userId]}
      updatedUser.answers[questionId] = option

      return {
        ...state,
        [userId]: updatedUser,
      }
    default:
      return state
  }
}