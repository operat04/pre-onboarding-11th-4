import axios from 'axios';

export const getData = params => {
  const response = axios.get(`http://localhost:4000/sick?q=${params}`);

  return response;
};
