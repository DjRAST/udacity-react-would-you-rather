import { SET_USERS, ADD_ANSWER, ADD_QUESTION_FOR_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    case ADD_ANSWER:
      const updatedUser = {...state[action.userId]}
      updatedUser.answers[action.questionId] = action.option

      return {
        ...state,
        [action.userId]: updatedUser,
      }
    case ADD_QUESTION_FOR_USER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat([action.questionId])
        }
      }
    default:
      return state
  }
}