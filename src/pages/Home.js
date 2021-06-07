import React, { Component, Fragment } from 'react'
import { Tabs, Tab, Paper, Container, Box } from '@material-ui/core'
import { connect } from 'react-redux'

import QuestionsPreviewList from '../components/QuestionsPreviewList'

class HomePage extends Component {
  state = {
    selectedTabIndex: 0,
  }

  onTabChanged = (event, index) => {
    this.setState({
      selectedTabIndex: index
    })
  }

  render() {
    const {selectedTabIndex} = this.state
    const {unansweredQuestions, answeredQuestions} = this.props

    return (
      <Fragment>
        <h1>Home Page</h1>
        <Paper elevation={2}>
          <Tabs variant="fullWidth" value={selectedTabIndex} onChange={this.onTabChanged}>
            <Tab label="Unanswered"></Tab>
            <Tab label="Answered"></Tab>
          </Tabs>
          <Box p={3}>
            {selectedTabIndex === 0 && <QuestionsPreviewList questions={unansweredQuestions} />}
            {selectedTabIndex === 1 && <QuestionsPreviewList questions={answeredQuestions} />}
          </Box>
        </Paper>
      </Fragment>
    )
  }
}

function mapStateToProps ({ questions, auth }) {
  const unansweredQuestions = []
  const answeredQuestions = []

  for (const id in questions) {
    (questions[id].optionOne.votes.includes(auth) || questions[id].optionTwo.votes.includes(auth))
      ? answeredQuestions.push(questions[id])
      : unansweredQuestions.push(questions[id])
  }

  return {
    unansweredQuestions,
    answeredQuestions,
  }
}

export default connect(mapStateToProps)(HomePage)