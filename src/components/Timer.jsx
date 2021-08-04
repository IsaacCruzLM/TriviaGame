import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import './Timer.css';

// import { decreaseTime, stopTime } from '../redux/actions';

const ONE_SECOND = 1000;

class Timer extends React.Component {
  constructor() {
    super();

    this.updateTheTime = this.updateTheTime.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateTheTime, ONE_SECOND);
  }

  updateTheTime() {
    const { currentTime, isToStopTime, descrease, stop } = this.props;
    if (currentTime === 0 || isToStopTime) {
      stop();
    } else {
      descrease();
    }
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div>
        {`Tempo Restante: ${currentTime}`}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    descrease: () => dispatch(decreaseTime()),
    stop: () => dispatch(stopTime()),
  }
);

const mapStateToProps = (state) => (
  {
    currentTime: state.game.time,
    isToStopTime: state.game.stopTime,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  isToStopTime: PropTypes.bool.isRequired,
  descrease: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
};
