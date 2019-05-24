import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = localStorage.getItem('jwt');
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default {
  urls: {
    news: "/news",
    users: "/users",
    login: "/auth/login",
    logout: "/auth/logout",
    check: "/auth/check"
  },
  axios: axios
};