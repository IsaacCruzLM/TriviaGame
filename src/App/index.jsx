import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Game, Settings } from '../pages';
// import {  } from '../components';
// import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/settings"
          render={ (props) => <Settings { ...props } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          exact
          path="/game"
          render={ (props) => <Game { ...props } /> }
        />
        {/* <Route render={ (props) => <NotFound { ...props } /> } /> */}
      </Switch>
    );
  }
}
