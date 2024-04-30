import axios from 'axios';
const api = axios.create({
  baseURL:'http://localhost:3008',
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token=localStorage.getItem('token')
    if(token)
      {
        config.headers.Authorization=`${token}`
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
