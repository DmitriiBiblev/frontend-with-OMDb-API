import { Action } from 'redux';
import { IGetMoviesData } from '../../interfaces/get-movies-data.interface';

export enum MoviesActionTypes {
  getMovies = '[Movies] Get Movies',
  getMoviesSuccess = '[Movies] Get Movies Success',
  getMoviesFailed = '[Movies] Get Movies Failed',
}

export class GetMovies implements Action {
  readonly type = MoviesActionTypes.getMovies;
}

export class GetMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.getMoviesSuccess;

  constructor(public payload: IGetMoviesData) {
  }
}

export class GetMoviesFailed implements Action {
  readonly type = MoviesActionTypes.getMoviesFailed;
}

export type MoviesActions =
  | GetMovies
  | GetMoviesSuccess
  | GetMoviesFailed
  ;
