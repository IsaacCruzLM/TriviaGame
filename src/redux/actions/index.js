export const ADD_USER = 'ADD_USER';
export const SAVE_PLAYER_INFO = 'SAVE_PLAYER_INFO';

export const addUser = (user) => (
  {
    type: ADD_USER,
    user,
  }
);

export const savePlayerInfo = (player) => (
  {
    type: SAVE_PLAYER_INFO,
    player,
  }
);
