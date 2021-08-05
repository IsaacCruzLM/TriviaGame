import { SAVE_PLAYER_INFO, INCREASE_SCORE } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_PLAYER_INFO:
    return { ...state, ...action.player };
  case INCREASE_SCORE:
    return { ...state, score: state.score + action.points };
  default:
    return state;
  }
};

export default player;
