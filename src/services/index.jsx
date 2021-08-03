export const fetchToken = async () => {
  const storageContent = localStorage.getItem('token');
  if (!storageContent) {
    const END_POINT = 'https://opentdb.com/api_token.php?command=request';
    const res = await fetch(END_POINT);
    const token = await res.json();
    localStorage.setItem('token', token.token);
    return token.token;
  }
  return storageContent;
};

export const fetchQuestions = async (token) => {
  const END_POINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const res = await fetch(END_POINT);
  const jsonRes = await res.json();
  const questions = jsonRes.results;
  return questions;
};
