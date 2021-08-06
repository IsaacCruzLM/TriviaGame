import md5 from 'crypto-js/md5';
import { loadTokenFromStorage, saveTokenToStorage } from './localStorage';

const END_POINT = 'https://opentdb.com/api.php?amount=5&token=';
const TOKEN_END_POINT = 'https://opentdb.com/api_token.php?command=request';

export const fetchTokenFromApiAndSave = async () => {
  const res = await fetch(TOKEN_END_POINT);
  const jsonRes = await res.json();
  const { token } = jsonRes;
  saveTokenToStorage(token);
  return token;
};

const fetchQuestions = async (token, sets) => {
  const expiredCode = 3;
  const { selectedCategory: cat, selectedDifficulty: dif, selectedType: typ } = sets;
  const endPoint = `${END_POINT}${token}&category=${cat}&difficulty=${dif}&type=${typ}`;
  const res = await fetch(endPoint);
  const jsonRes = await res.json();
  if (jsonRes.response_code === expiredCode) { return 'token expired'; }
  const questions = jsonRes.results;
  return questions;
};

export const getQuestions = async (settings) => {
  let token = loadTokenFromStorage();
  if (token === 'no token in storage') { token = await fetchTokenFromApiAndSave(); }
  let questions = await fetchQuestions(token, settings);
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
