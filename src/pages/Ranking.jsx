import React from 'react';
import { Link } from 'react-router-dom';
import { loadRankingFromStorage } from '../services/localStorage';

class Ranking extends React.Component {
  render() {
    // localStorageInit();
    const ranking = loadRankingFromStorage();
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {
            ranking.map((element, index) => (
              <li key={ index }>
                <p data-testid={ `player-name-${index}` }>{element.player.name}</p>
                <p data-testid={ `player-score-${index}` }>{element.player.score}</p>
                <img src={ element.player.gravatarUrl } alt="Avatar" />
              </li>
            ))
          }
        </ol>
        <Link to="/" data-testid="btn-go-home">
          Tela inicial
        </Link>
      </div>
    );
  }
}

export default Ranking;
