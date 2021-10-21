import axios from 'axios';

const axiosInstance = new axios.create({
  baseURL: 'https://exam-b3163-default-rtdb.firebaseio.com',
});

export default axiosInstance;
