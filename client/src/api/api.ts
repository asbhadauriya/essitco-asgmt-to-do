import { deleteAllCookies } from '@/helpers/CommonFunctions';
import axios from 'axios';
const api = axios.create({
  baseURL:process.env.NEXT_PUBLIC_LIVE_API_URL,
  // withCredentials: true,
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
  (error:any) => {
    if (error.response.status === 401) {
      // Check if token is expired
  
        logoutUser();
      
    }
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
const logoutUser = () => {
  localStorage.clear();
  deleteAllCookies()
  if(!window.location.pathname.includes('auth'))
    {

      window.location.href = '/auth/signin';
    }
  
};