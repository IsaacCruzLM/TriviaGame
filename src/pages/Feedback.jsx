import React from 'react';
import { shape, number } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import './Feedback.css';
// import { savePlayerInfo } from '../redux/actions';

class Feedback extends React.Component {
  render() {
    const { player: { assertions, score } } = this.props;
    const threshold = 3;
    return (
      <>
        <Header />
        <section className="feedback">
          <h1 data-testid="feedback-text">
            { assertions >= threshold ? 'Mandou bem!' : 'Podia ser melhor...' }
          </h1>
          <p>
            Você acertou
            <span data-testid="feedback-total-question">
              {' '}
              { assertions }
              {' '}
            </span>
            { assertions === 1 ? 'questão' : 'questões' }
          </p>
          <p>
            Um total de
            <span data-testid="feedback-total-score">
              {' '}
              {score}
              {' '}
            </span>
            pontos.
          </p>
          <div>
            <Link to="/ranking">
              <button type="button" data-testid="btn-ranking">
                Ver Ranking
              </button>
            </Link>
            <Link to="/">
              <button type="button" data-testid="btn-play-again">
                Jogar Novamente
              </button>
            </Link>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(Feedback);

Feedback.propTypes = {
  player: shape({
    assertions: number,
    score: number,
  }).isRequired,
};
