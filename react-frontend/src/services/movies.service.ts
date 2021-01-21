import { axios } from '../axios.config';
import { AxiosResponse } from 'axios';
import { IGetMoviesResponse } from '../interfaces/get-movies-response.interface';
import { IGetMoviesData } from '../interfaces/get-movies-data.interface';

export const getMovies = (): Promise<IGetMoviesData> =>
  axios.get('', { params: { s: 'bad', page: 1 } })
    .then((response: AxiosResponse<IGetMoviesResponse>) => ({
        movies: response.data.Search,
        pageCount: +response.data.totalResults / 10,
      }),
    );
