import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Certifique-se de que a porta está correta
});

export default api;
