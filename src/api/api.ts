import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postTransfer = async (meanArray: string[]) => {
  // const data = await customAxios.get('/transfer', meanArray);
  const { data } = await customAxios.get('/transfer');

  return data;
};

export const postBirthTransfer = async (birthday: number[]) => {
  // const data = await customAxios.get('/birthtransfer', birthday);
  const { data } = await customAxios.get('/birthtransfer');

  return data;
};

export default customAxios;
