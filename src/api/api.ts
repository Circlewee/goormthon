import axios, { AxiosResponse } from 'axios';

const status = process.env.NODE_ENV;

const customAxios = axios.create({
  baseURL:
    status === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL_JSON,
});

export const postTransfer = async (meanArray: string[]) => {
  let data: AxiosResponse<string[]>;

  if (status === 'development') {
    data = await customAxios.get('/transfer');
  } else {
    data = await customAxios.post<string[]>('/transfer', meanArray);
  }

  return data;
};

export const postBirthTransfer = async (birthday: number[]) => {
  let data: AxiosResponse<string[]>;

  if (status === 'development') {
    data = await customAxios.get('/birthtransfer');
  } else {
    data = await customAxios.post<string[]>('/birthtransfer', birthday);
  }

  return data;
};

export default customAxios;
