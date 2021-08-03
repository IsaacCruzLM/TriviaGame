import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  render() {
    const { userName } = this.props;
    const { score } = this.state;

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
          <h4 data-testid="header-profile-picture" className="score">
            {`Pontos: ${score}`}
          </h4>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    userName: state.user.nickname,
  }
);
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};
