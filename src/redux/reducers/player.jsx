import { SAVE_PLAYER_INFO } from '../actions';

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
  default:
    return state;
  }
};

export default player;
