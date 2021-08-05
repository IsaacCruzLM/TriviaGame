import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { userName, score, gravatarUrl } = this.props;

    return (
      <header>
        <div className="userInfo">
          <img
            data-testid="header-profile-picture"
            className="avatar"
            src={ gravatarUrl }
            alt="Icone do Avatar"
          />
          <h2 data-testid="header-player-name" className="userName">
            {`Jogador: ${userName}`}
          </h2>
        </div>
        <div className="scoreBoard">
          <h4 data-testid="header-score" className="score">
            {score}
          </h4>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    userName: state.player.name,
    score: state.player.score,
    gravatarUrl: state.player.gravatarUrl,
  }
);

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarUrl: PropTypes.string.isRequired,
};
