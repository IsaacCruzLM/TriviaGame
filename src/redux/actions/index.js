import { fetchGravatar, fetchTokenFromApiAndSave } from '../../services/api';

export const ADD_USER = 'ADD_USER';
export const DECREASE_TIME = 'DECREASE_TIME';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const STOP_TIME = 'STOP_TIME';
export const RESET_TIME = 'RESET_TIME';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const INCREASE_ASSERTIONS = 'INCREASE_ASSERTIONS';
export const RESET_ASSERTIONS = 'RESET_ASSERTIONS';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

const CATEGORIES_URL = 'https://opentdb.com/api_category.php';

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

export const resetAssertions = () => (
  {
    type: RESET_ASSERTIONS,
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

const actionCategories = (categories) => (
  {
    type: SAVE_CATEGORIES,
    categories,
  }
);

export const fetchCategories = () => async (dispatch) => {
  try {
    const request = await fetch(CATEGORIES_URL);
    const response = await request.json();
    dispatch(actionCategories(response.trivia_categories));
  } catch (e) {
    console.log(e);
  }
};

const actionDifficulty = (categories) => (
  {
    type: SAVE_CATEGORIES,
    categories,
  }
);

export const fetchDifficulty = () => async (dispatch) => {
  try {
    const request = await fetch(CATEGORIES_URL);
    const response = await request.json();
    dispatch(actionDifficulty(response.trivia_categories));
  } catch (e) {
    console.log(e);
  }
};

export const saveSettings = (settings) => (
  {
    type: SAVE_SETTINGS,
    settings,
  }
);

export const saveToken = (token) => (
  {
    type: SAVE_TOKEN,
    token,
  }
);

export const fetchToken = () => async (dispatch) => {
  try {
    const token = await fetchTokenFromApiAndSave();
    console.log(token);
    dispatch(saveToken(token));
  } catch (e) {
    console.log(e);
  }
};
