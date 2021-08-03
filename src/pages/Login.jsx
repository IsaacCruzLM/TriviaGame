import React from 'react';
import { func } from 'prop-types';

import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { PAGE } from './pages';
// import './PAGE.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nickname: '',
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

  onClickHandler() {
    const { add } = this.props;
    add(this.state);
  }

  checkValid(value) {
    const { email, nickname } = this.state;
    if (email.length && nickname.length && value) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

  render() {
    const { email, nickname, btnDisable } = this.state;

    return (
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
        <label htmlFor="nickname-input">
          Apelido:
          <input
            type="nickname"
            data-testid="input-player-name"
            id="nickname-input"
            name="nickname"
            value={ nickname }
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
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    add: (user) => dispatch(addUser(user)),
    // dispatchAsyncAction: (payload) => dispatch(ASYNCACTION(payload)),
  }
);
export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  add: func.isRequired,
};
