import {
  DECREASE_TIME,
  STOP_TIME,
  RESET_TIME,
  SAVE_CATEGORIES,
  SAVE_SETTINGS,
  SAVE_TOKEN,
} from '../actions';

const initialState = {
  time: 30,
  stopTime: false,
  score: 0,
  amount: 5,
  token: '',
  categories: [],
  questions: [],
  selectedCategory: '',
  selectedDifficulty: '',
  selectedType: '',
};

const game = (state = initialState, action) => {
  switch (action.type) {
  case DECREASE_TIME:
    return { ...state, time: state.time - 1 };
  case STOP_TIME:
    return { ...state, stopTime: true };
  case RESET_TIME:
    return { ...state, time: 30, stopTime: false };
  case SAVE_CATEGORIES:
    return { ...state, categories: action.categories };
  case SAVE_SETTINGS:
    return { ...state, ...action.settings };
  case SAVE_TOKEN:
    return { ...state, token: action.token };
  default:
    return state;
  }
};

export default game;
