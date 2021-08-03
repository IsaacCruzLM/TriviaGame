import React from 'react';
// import { func } from 'prop-types';
// import { connect } from 'react-redux';
// import { addUser } from '../redux/actions';

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { PAGE } from './pages';
// import './PAGE.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.checkValid(target.value));
  }

  onClickHandler() {
  }

  render() {
    return (
      <h1 data-testid="settings-title"> Settings</h1>
    );
  }
}

export default Settings;
