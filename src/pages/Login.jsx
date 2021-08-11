import React from 'react';
import { func, shape, number, string } from 'prop-types';
import { connect } from 'react-redux';
import {
  addUser,
  fetchAvatar,
  resetTime,
  resetAssertions,
  fetchToken,
} from '../redux/actions';
import './Login.css';
import img from '../images/trivia.png';

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
  }

  componentDidMount() {
    const { tokenFetch } = this.props;
    tokenFetch();
  }

  onChangeHandler({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      const { email, name } = this.state;
      if (email.length && name.length) {
        this.setState({ btnDisable: false });
      } else {
        this.setState({ btnDisable: true });
      }
    });
  }

  async onClickHandler() {
    const {
      add,
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

  render() {
    const { email, name, btnDisable } = this.state;
    const { history } = this.props;

    return (
      <div className="login">
        <div><img src={ img } alt="" /></div>
        <form>
          <label htmlFor="email-input">
            <input
              type="email"
              data-testid="input-gravatar-email"
              id="email-input"
              name="email"
              placeholder="Email"
              value={ email }
              onChange={ this.onChangeHandler }
            />
          </label>
          <label htmlFor="name-input">
            <input
              type="name"
              data-testid="input-player-name"
              id="name-input"
              name="name"
              placeholder="Apelido"
              value={ name }
              onChange={ this.onChangeHandler }
            />
          </label>
          <input
            className="jogar-btn"
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (user) => dispatch(addUser(user)),
  avatarFetch: (email) => dispatch(fetchAvatar(email)),
  tokenFetch: () => dispatch(fetchToken()),
  resetTimeAction: () => dispatch(resetTime()),
  resetAssertionsAction: () => dispatch(resetAssertions()),
});

const mapStateToProps = (state) => ({
  playerState: state.player,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  add: func.isRequired,
  avatarFetch: func.isRequired,
  tokenFetch: func.isRequired,
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
