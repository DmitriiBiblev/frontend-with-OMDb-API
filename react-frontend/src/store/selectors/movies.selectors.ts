import { IRootState } from '../reducers';
import { createSelector } from 'reselect';
import { IGetMoviesData } from '../../interfaces/get-movies-data.interface';

const _getMoviesData = (state: IRootState) => state.movies;

export const movies = createSelector(
  _getMoviesData,
  (getMoviesData: IGetMoviesData) => getMoviesData.movies,
);

export const pageCount = createSelector(
  _getMoviesData,
  (getMoviesData: IGetMoviesData) => getMoviesData.pageCount,
);
