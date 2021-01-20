import { axios } from '../axios.config';
import { AxiosResponse } from 'axios';

export const getMovies = (): Promise<any> =>
  axios.get('', { params: { s: 'bad', page: 1 } })
    .then((data: AxiosResponse<any>) => data.data);
