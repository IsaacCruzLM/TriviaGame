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
    const { userName, score } = this.props;

    return (
      <header>
        <div className="userInfo">
          <img
            data-testid="header-profile-picture"
            className="avatar"
            src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black-thumbnail.png"
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
  }
);
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
