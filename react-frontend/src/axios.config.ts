import Axios, { AxiosInstance } from 'axios';

export const axios: AxiosInstance = Axios.create({
  baseURL: 'http://www.omdbapi.com/?apiKey=379e2b56',
});
