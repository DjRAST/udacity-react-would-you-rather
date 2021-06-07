import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionDetailPage extends Component {
  render() {
    const { hasInvalidId, question_id } = this.props

    if (hasInvalidId) {
      return (
        <Redirect to="/404" />
      )
    }

    return (
      <h1>Question Details, {question_id}</h1>
    )
  }
}

function mapStateToProps ({questions}, props) {
  const { question_id } = props.match.params
  let hasInvalidId = !questions[question_id]

  return {
    hasInvalidId,
    question_id,
  }
}

export default connect(mapStateToProps)(QuestionDetailPage)