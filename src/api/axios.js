import axios from 'axios';

const getData = params => {
  if (params.length !== 0) {
    const response = axios.get(`http://localhost:4000/sick?q=${params}`);
    return response;
  }
  return [];
};

export default getData;
