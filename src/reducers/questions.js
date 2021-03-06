import { ADD_QUESTION, ANSWER_QUESTION, SET_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return {
        ...state,
        [action.newQuestion.id]: action.newQuestion,
      };
    case ANSWER_QUESTION:
      const {userId, questionId, option} = action;
      const answeredQuestion = {...state[questionId]};
      answeredQuestion[option].votes.push(userId);
      return {
        ...state,
        [questionId]: answeredQuestion,
      };
    default:
      return state;
  }
}