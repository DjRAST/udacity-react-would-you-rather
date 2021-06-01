import { SET_USERS } from '../actions/users'

export default function auth (state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}