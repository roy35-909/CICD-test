import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://13.60.27.2:5001', // Adjust to your backend URL
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
