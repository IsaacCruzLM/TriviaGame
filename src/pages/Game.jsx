import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func, shape, string } from 'prop-types';
import { getQuestions } from '../services/api';
import { localStorageInit } from '../services/localStorage';
import { Header, Question, Timer } from '../components';
// import './PAGE.css';

import { resetTime } from '../redux/actions';

const FIVE = 5;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      isLoading: true,
      questionIndex: 0,
    };
    this.nextQ = this.nextQ.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { settings } = this.props;
    getQuestions(settings)
      .then((questions) => this.setState({
        questions,
        isLoading: false,
      }));
  }

  componentWillUnmount() {
    localStorageInit();
    const state = JSON.parse(localStorage.getItem('state'));
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const arr = [...ranking, state];
    arr.sort((a, b) => b.player.score - a.player.score);
    const save = JSON.stringify(arr);
    localStorage.setItem('ranking', save);
  }

  nextQ() {
    const { resetTimer } = this.props;
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex + 1,
    }));
    resetTimer();
  }

  render() {
    const { isLoading, questions, questionIndex } = this.state;

    if (questionIndex === FIVE) {
      return <Redirect to="/feedback" />;
    }

    return (
      <div>
        <Header />
        <p>Game</p>
        {
          isLoading
            ? <p>Loading...</p>
            : <Question funct={ this.nextQ } question={ questions[questionIndex] } />
        }
        <Timer />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    question: state.game.questions,
    settings: {
      selectedCategory: state.game.selectedCategory,
      selectedDifficulty: state.game.selectedDifficulty,
      selectedType: state.game.selectedType,
    },
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    resetTimer: () => dispatch(resetTime()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);

Game.propTypes = {
  resetTimer: func.isRequired,
  settings: shape({
    selectedCategory: string,
    selectedDifficulty: string,
    selectedType: string,
  }).isRequired,
};
