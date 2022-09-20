import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const postTransfer = async (meanArray: string[]) => {
  const data = await customAxios.post('/transfer', meanArray);
  // const { data } = await customAxios.get('/transfer');

  return data;
};

export const postBirthTransfer = async (birthday: number[]) => {
  const data = await customAxios.post('/birthtransfer', birthday);
  // const { data } = await customAxios.get('/birthtransfer');

  return data;
};

export default customAxios;
