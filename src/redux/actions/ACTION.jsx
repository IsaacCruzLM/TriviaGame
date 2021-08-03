export const ACTION_TYPE = 'ACTION_TYPE';

export const ACTION = (payload) => (
  {
    type: ACTION_TYPE,
    payload,
  }
);
