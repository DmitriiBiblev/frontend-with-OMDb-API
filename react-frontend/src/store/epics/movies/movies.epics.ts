import { Observable } from 'rxjs';
import { GetMovies, GetMoviesFailed, GetMoviesSuccess, MoviesActionTypes } from '../../actions/movies/movies.actions';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { getMovies } from '../../../services/movies.service';

export const getMoviesEpics = (action$: Observable<GetMovies>) => action$.pipe(
  ofType<GetMovies>(MoviesActionTypes.getMovies),
  mergeMap(() =>
    getMovies()
      .then(() => new GetMoviesSuccess())
      .catch(() => new GetMoviesFailed()),
  ),
);
