import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  //baseURL: 'http://localhost:4000',
  baseURL: 'http://36c5-2a01-cb04-b44-200-e439-b73d-d797-1322.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const jsonValue = await AsyncStorage.getItem('credentials');

    if (jsonValue) {
      // FIXME: should use a centralized interface to describe what is stored in the AsyncStorage
      // which currently is token string and email string
      const { token, email } = JSON.parse(jsonValue);
      if (token) {
        // FIXME: should use proper config interface to shut down TS error
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
