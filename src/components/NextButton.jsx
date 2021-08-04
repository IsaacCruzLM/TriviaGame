import React from 'react';
import { func } from 'prop-types';

class NextButton extends React.Component {
  constructor() {
    super();
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const { funct, resetStyles } = this.props;
    funct();
    resetStyles();
  }

  render() {
    return (
      <input
        type="button"
        value="Próxima"
        data-testid="btn-next"
        onClick={ this.nextQuestion }
      />
    );
  }
}

NextButton.propTypes = {
  funct: func.isRequired,
  resetStyles: func.isRequired,
};

export default NextButton;
