import { ACTION_TYPE } from '../actions/ACTION';

const initialState = {
  key: 'value',
};

const REDUCER = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE:
    return { ...state, key: action.payload };
  default:
    return state;
  }
};

export default REDUCER;
