export const localStorageInit = () => {
  const ranking = localStorage.getItem('ranking');
  if (!ranking) {
    const emtpyArr = [];
    const save = JSON.stringify(emtpyArr);
    localStorage.setItem('ranking', save);
  }
  console.log('LUCAS: LOCAL STORAGE INITIATED');
};

export const loadTokenFromStorage = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (!token) { return 'no token in storage'; }
  return token;
};

export const loadRankingFromStorage = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return ranking;
};

export const saveTokenToStorage = (token) => {
  const save = JSON.stringify(token);
  localStorage.setItem('token', save);
};
