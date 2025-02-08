import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://51.20.183.174:5001', // Adjust to your backend URL
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
