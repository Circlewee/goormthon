import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const postTransfer = async (meanArray: string[]) => {
  const data = await customAxios.post('/transfer', meanArray);
  console.log(data);
};

export default customAxios;
