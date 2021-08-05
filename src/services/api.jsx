import md5 from 'crypto-js/md5';
import { loadTokenFromStorage, saveTokenToStorage } from './localStorage';

const fetchTokenFromApiAndSave = async () => {
  const END_POINT = 'https://opentdb.com/api_token.php?command=request';
  const res = await fetch(END_POINT);
  const jsonRes = await res.json();
  const { token } = jsonRes;
  saveTokenToStorage(token);
  return token;
};

const fetchQuestions = async (token) => {
  const expiredCode = 3;
  const END_POINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const res = await fetch(END_POINT);
  const jsonRes = await res.json();
  if (jsonRes.response_code === expiredCode) { return 'token expired'; }
  const questions = jsonRes.results;
  return questions;
};

export const getQuestions = async () => {
  let token = loadTokenFromStorage();
  if (token === 'no token in storage') { token = await fetchTokenFromApiAndSave(); }
  let questions = await fetchQuestions(token);
  if (questions === 'token expired') {
    token = await fetchTokenFromApiAndSave();
    questions = await await fetchQuestions(token);
  }
  return questions;
};

export const fetchGravatar = async (email) => {
  const hash = md5(email).toString();
  const gravatar = await fetch(`https://www.gravatar.com/avatar/${hash}`);
  return gravatar.url;
};
