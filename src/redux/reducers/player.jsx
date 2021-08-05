import { ADD_USER, INCREASE_SCORE, SAVE_AVATAR, INCREASE_ASSERTIONS } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return { ...state, name: action.user.name, gravatarEmail: action.user.email };
  case INCREASE_SCORE:
    return { ...state, score: state.score + action.points };
  case INCREASE_ASSERTIONS:
    return { ...state, assertions: state.assertions + 1 };
  case SAVE_AVATAR:
    return { ...state, gravatarUrl: action.avatar };
  default:
    return state;
  }
};

export default player;
