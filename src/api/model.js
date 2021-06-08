import PropTypes from 'prop-types'

export const QuestionOptionType = PropTypes.shape({
  votes: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
})

export const QuestionType = PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  optionOne: QuestionOptionType,
  optionTwo: QuestionOptionType,
})

export const QuestionsType = PropTypes.arrayOf(QuestionType)
