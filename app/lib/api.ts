// app/lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ultronxchange.io/api/v1/',
});

const publicApi = axios.create({
  baseURL: 'https://ultronxchange.io/api/public/v1/',
});

export { api, publicApi };