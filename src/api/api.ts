import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const postTransfer = async (meanArray: string[]): Promise<{ data: string }> => {
  const data = await customAxios.post<string>('/transfer', meanArray);

  return data;
};

export const postBirthTransfer = async (birthday: number[]) => {
  const data = await customAxios.post('/birthtransfer', birthday);

  return data;
};

export default customAxios;
