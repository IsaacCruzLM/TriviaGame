export const localStorageInit = () => {
  console.log('LUCAS: LOCAL STORAGE INITIATED');
};

export const loadTokenFromStorage = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (!token) { return 'no token in storage'; }
  return token;
};

export const saveTokenToStorage = (token) => {
  const save = JSON.stringify(token);
  localStorage.setItem('token', save);
};
