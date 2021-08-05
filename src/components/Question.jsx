import React from 'react';
import { shape, string, arrayOf, number, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import './Question.css';
import NextButton from './NextButton';

import { stopTime, increaseScore } from '../redux/actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      correctBtnClass: '',
      incorrectBtnClass: '',
      answered: false,
    };
    this.shuffleAnswers = this.shuffleAnswers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.savePlayerToStorage = this.savePlayerToStorage.bind(this);
    this.savePoints = this.savePoints.bind(this);
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

  async savePoints(points) {
    const { addPoints } = this.props;
    await addPoints(points);
    this.savePlayerToStorage();
  }

  savePlayerToStorage() {
    const { playerState } = this.props;
    localStorage.setItem('state', JSON.stringify({ player: playerState }));
  }

  checkAnswer({ target }) {
    const { question, stopTheTimer, timer } = this.props;
    const { difficulty } = question;
    const levels = ['easy', 'medium', 'hard'];
    const ten = 10;
    stopTheTimer();
    console.log(timer);

    if (target.value === question.correct_answer) {
      const points = ten + (timer * (levels.indexOf(difficulty) + 1));
      console.log(points);
      this.savePoints(points);
    } else {
      console.log('incorrect');
    }

    this.setState({
      correctBtnClass: 'correct-btn',
      incorrectBtnClass: 'incorrect-btn',
      answered: true });
  }

  render() {
    const { question, isToStopTime } = this.props;
    const { answers, correctBtnClass, incorrectBtnClass, answered } = this.state;
    return (
      <div>
        <div>
          <p data-testid="question-category">{question.category}</p>
          <p data-testid="question-text">{question.question}</p>
          {answers.map((answer) => {
            const isCorrect = answer === question.correct_answer;
            return (
              <input
                key={ answer }
                data-testid={
                  isCorrect
                    ? 'correct-answer'
                    : `wrong-answer-${question.incorrect_answers.indexOf(answer)}`
                }
                type="button"
                value={ answer }
                className={ isCorrect ? correctBtnClass : incorrectBtnClass }
                onClick={ this.checkAnswer }
                disabled={ isToStopTime }
              />
            );
          })}
        </div>
        {answered ? <NextButton /> : null}
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
  stopTheTimer: func.isRequired,
  isToStopTime: bool.isRequired,
  timer: number.isRequired,
  addPoints: func.isRequired,
  playerState: shape({
    name: string,
    assertions: number,
    score: number,
    gravatarEmail: string,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    stopTheTimer: () => dispatch(stopTime()),
    addPoints: (points) => dispatch(increaseScore(points)),
  }
);

const mapStateToProps = (state) => (
  {
    isToStopTime: state.game.stopTime,
    timer: state.game.time,
    playerState: state.player,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Question);
