import { DECREASE_TIME, STOP_TIME, RESET_TIME, SAVE_CATEGORIES } from '../actions';

const initialState = {
  time: 30,
  stopTime: false,
  score: 0,
  amount: 5,
  categories: [],
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
  default:
    return state;
  }
};

export default game;
