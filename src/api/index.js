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
    shop: "/shop",
    users: "/users",
    login: "/auth/login",
    logout: "/auth/logout",
    check: "/auth/check",
    cart: "/auth/cart",
    uncart: "/auth/uncart",
    uploads: "/uploads",
    chats: "/chats",
    messages: "/chats/messages"
  },
  axios: axios
};