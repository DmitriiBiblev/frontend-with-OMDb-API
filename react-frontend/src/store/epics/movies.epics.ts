import { Observable } from 'rxjs';
import { GetMovies, GetMoviesFailed, GetMoviesSuccess, MoviesActionTypes } from '../actions/movies.actions';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { getMovies } from '../../services/movies.service';
import { IGetMoviesData } from '../../interfaces/get-movies-data.interface';

export const getMoviesEpics = (action$: Observable<GetMovies>) => action$.pipe(
  ofType<GetMovies>(MoviesActionTypes.getMovies),
  mergeMap(() =>
    getMovies()
      .then((data: IGetMoviesData) => new GetMoviesSuccess(data))
      .catch(() => new GetMoviesFailed()),
  ),
);
