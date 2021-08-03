import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ACTION } from '../redux/actions/ACTION';

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { COMPONENT } from './components';
// import './COMPONENT.css';

class COMPONENT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  onClickHandler() {
    const { dispatchAction } = this.props;
    dispatchAction(this.state);
  }
    
  // componentDidMount() {}
  // componentWillUnmount() {}
  // shouldComponentUpdate() {}

  render() {
    // const {  } = this.props;
    // const {  } = this.state;

    return (
      <div>
        <p>COMPONENT</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    dispatchAction: (payload) => dispatch(ACTION(payload)),
    dispatchAsyncAction: (payload) => dispatch(ASYNCACTION(payload)),
  }
);
const mapStateToProps = (state) => (
  {
    STOREINFO: state.reducer,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT);

// COMPONENT.propTypes = {
//   var: PropTypes.type.isRequired,
//   arr: PropTypes.arrayOf(PropTypes.number).isRequired,

//   obj: PropTypes.shape({
//     var: PropTypes.type.isRequired,
//     }).isRequired,

//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
// };
