export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions
})

export const answerQuestion = (userId, questionId, option) => ({
  type: ANSWER_QUESTION,
  userId,
  questionId,
  option,
})

export const addQuestion = (newQuestion) => ({
  type: ADD_QUESTION,
  newQuestion,
})