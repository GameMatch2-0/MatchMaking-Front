import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sua-api.com',
});

export default axiosInstance;
