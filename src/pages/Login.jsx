import React from 'react';
import { func, shape, number, string } from 'prop-types';

import { connect } from 'react-redux';
import { addUser, fetchAvatar, resetTime, resetAssertions } from '../redux/actions';

// import { Link } from 'react-router-dom';
// import { PAGE } from './pages';
// import './PAGE.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      btnDisable: true,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.checkValid(target.value));
  }

  async onClickHandler() {
    const { add,
      history,
      playerState,
      avatarFetch,
      resetTimeAction,
      resetAssertionsAction,
    } = this.props;

    const { email, name } = this.state;
    await add({ email, name });
    await avatarFetch(email);
    localStorage.setItem('state', JSON.stringify({ player: playerState }));
    history.push('/game');
    resetTimeAction();
    resetAssertionsAction();
  }

  checkValid(value) {
    const { email, name } = this.state;
    if (email.length && name.length && value) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

  render() {
    const { email, name, btnDisable } = this.state;
    const { history } = this.props;

    return (
      <>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              data-testid="input-gravatar-email"
              id="email-input"
              name="email"
              value={ email }
              onChange={ this.onChangeHandler }
            />
          </label>
          <label htmlFor="name-input">
            Apelido:
            <input
              type="name"
              data-testid="input-player-name"
              id="name-input"
              name="name"
              value={ name }
              onChange={ this.onChangeHandler }
            />
          </label>
          <input
            type="button"
            data-testid="btn-play"
            disabled={ btnDisable }
            value="Jogar"
            onClick={ this.onClickHandler }
          />
        </form>
        <input
          data-testid="btn-settings"
          type="button"
          value="Settings"
          onClick={ () => history.push('/settings') }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    add: (user) => dispatch(addUser(user)),
    avatarFetch: (email) => dispatch(fetchAvatar(email)),
    resetTimeAction: () => dispatch(resetTime()),
    resetAssertionsAction: () => dispatch(resetAssertions()),
  }
);

const mapStateToProps = (state) => (
  {
    playerState: state.player,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  add: func.isRequired,
  avatarFetch: func.isRequired,
  resetTimeAction: func.isRequired,
  resetAssertionsAction: func.isRequired,
  history: shape({
    length: number,
    action: string,
    push: func,
  }).isRequired,
  playerState: shape({
    name: string,
    assertions: number,
    score: number,
    gravatarEmail: string,
  }).isRequired,
};
