export const ADD_USER = 'ADD_USER';

export const addUser = (user) => (
  {
    type: ADD_USER,
    user,
  }
);

export const DECREASE_TIME = 'DECREASE_TIME';

export const decreaseTime = () => (
  {
    type: DECREASE_TIME,
  }
);

export const STOP_TIME = 'STOP_TIME';

export const stopTime = () => (
  {
    type: STOP_TIME,
  }
);

export const RESET_TIME = 'RESET_TIME';

export const resetTime = () => (
  {
    type: RESET_TIME,
  }
);
