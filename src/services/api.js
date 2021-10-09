import axios from 'axios';

// https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20

const api = axios.create({
  baseURL: 'https://api.opensea.io/api/v1'
});

export default api;