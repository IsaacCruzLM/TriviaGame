import React from 'react';
import { Link } from 'react-router-dom';
import { loadRankingFromStorage } from '../services/localStorage';
import './Ranking.css';

class Ranking extends React.Component {
  render() {
    const ranking = loadRankingFromStorage();
    return (
      <div className="ranking">
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {
            ranking.map((element, index) => (
              <li key={ index }>
                <p>{`${index + 1}.`}</p>
                <p
                  className="ranking-mid"
                  data-testid={ `player-name-${index}` }
                >
                  {element.player.name}
                </p>
                <p data-testid={ `player-score-${index}` }>{element.player.score}</p>
                <img src={ element.player.gravatarUrl } alt="Avatar" />
              </li>
            ))
          }
        </ol>
        <Link to="/" data-testid="btn-go-home">
          <button type="button">Tela inicial</button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
