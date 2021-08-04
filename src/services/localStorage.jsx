const StorageName = 'Trivia App';

export const localStorageInit = () => {
  const content = JSON.parse(localStorage.getItem(StorageName));
  if (!content) {
    const newContent = {
      token: false,
      player: {
        name: false,
        assertions: false,
        score: false,
        gravatarEmail: false,
      },
      ranking: [],
    };
    const save = JSON.stringify(newContent);
    localStorage.setItem(StorageName, save);
  }
  console.log('LUCAS: LOCAL STORAGE INITIATED');
};

export const loadTokenFromStorage = () => {
  const content = JSON.parse(localStorage.getItem(StorageName));
  const { token } = content;
  if (!token) { return 'no token in storage'; }
  return token;
};

export const saveTokenToStorage = (token) => {
  const content = JSON.parse(localStorage.getItem(StorageName));
  const newContent = { ...content, token };
  const save = JSON.stringify(newContent);
  localStorage.setItem(StorageName, save);
};
