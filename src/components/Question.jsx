import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.shuffleAnswers = this.shuffleAnswers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentDidMount() {
    this.shuffleAnswers();
  }

  shuffleAnswers() {
    const { question } = this.props;
    const answers = [...question.incorrect_answers, question.correct_answer];
    const half = 0.5;
    answers.sort(() => Math.random() - half);
    this.setState({ answers });
  }

  checkAnswer({ target }) {
    const { question } = this.props;
    if (target.value === question.correct_answer) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  }

  render() {
    const { question } = this.props;
    const { answers } = this.state;
    return (
      <div>
        <p data-testid="question-category">{question.category}</p>
        <p data-testid="question-text">{question.question}</p>
        {answers.map((answer) => (
          <input
            key={ answer }
            data-testid={
              answer === question.correct_answer
                ? 'correct-answer'
                : `wrong-answer-${question.incorrect_answers.indexOf(answer)}`
            }
            type="button"
            value={ answer }
            onClick={ this.checkAnswer }
          />
        ))}
      </div>
    );
  }
}

Question.propTypes = {
  question: shape({
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: arrayOf(string),
  }).isRequired,
};

export default Question;
