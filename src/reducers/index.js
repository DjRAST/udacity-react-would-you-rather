import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import auth from './auth';
import users from './users';
import questions from './questions';

export default combineReducers({
  loadingBar: loadingBarReducer,
  auth,
  users,
  questions,
});