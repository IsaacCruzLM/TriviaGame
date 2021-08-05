import { fetchGravatar } from '../../services/api';

export const ADD_USER = 'ADD_USER';
export const DECREASE_TIME = 'DECREASE_TIME';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const STOP_TIME = 'STOP_TIME';
export const RESET_TIME = 'RESET_TIME';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const INCREASE_ASSERTIONS = 'INCREASE_ASSERTIONS';

export const addUser = (user) => (
  {
    type: ADD_USER,
    user,
  }
);

export const decreaseTime = () => (
  {
    type: DECREASE_TIME,
  }
);

export const stopTime = () => (
  {
    type: STOP_TIME,
  }
);

export const resetTime = () => (
  {
    type: RESET_TIME,
  }
);

export const increaseScore = (points) => (
  {
    type: INCREASE_SCORE,
    points,
  }
);

export const saveAvatar = (avatar) => (
  {
    type: SAVE_AVATAR,
    avatar,
  }
);

export const correctAnswers = () => (
  {
    type: INCREASE_ASSERTIONS,
  }
);

export const fetchAvatar = (email) => async (dispatch) => {
  try {
    const avatar = await fetchGravatar(email);
    dispatch(saveAvatar(avatar));
  } catch (e) {
    console.log(e);
  }
};
