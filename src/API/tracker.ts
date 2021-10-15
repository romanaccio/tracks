import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'http://e7e9549b945f.ngrok.io',
});
