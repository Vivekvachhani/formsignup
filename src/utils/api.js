import axios from 'axios';

const axiosApi = axios.create({
    // withCredentials: true,
    baseURL: `https://jsonplaceholder.typicode.com/`,
  });

  export default axiosApi;