import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

import { questionAnswer, QuestionType } from '../api/model';

const questionFormPropTypes = {
  question: QuestionType.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired,
};

class QuestionForm extends Component {
  state = {
    radioValue: null,
  };

  onRadioChanged = (event) => {
    this.setState({
      radioValue: event.target.value,
    });
  };

  render() {
    const {question, onQuestionAnswered} = this.props;
    const {radioValue} = this.state;

    return (
      <Fragment>
        <h4>Would you rather...</h4>
        <FormControl component="fieldset">
          <RadioGroup value={radioValue} onChange={this.onRadioChanged}>
            <FormControlLabel value={questionAnswer.optionOne} control={<Radio/>} label={question.optionOne.text}/>
            <FormControlLabel value={questionAnswer.optionTwo} control={<Radio/>} label={question.optionTwo.text}/>
          </RadioGroup>
          <Button variant="contained" disabled={!radioValue}
                  onClick={() => onQuestionAnswered(radioValue)}>Submit</Button>
        </FormControl>
      </Fragment>
    );
  }
}

QuestionForm.propTypes = questionFormPropTypes;

export default QuestionForm;