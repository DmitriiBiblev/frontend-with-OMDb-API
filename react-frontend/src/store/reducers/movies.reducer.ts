import { MoviesActions, MoviesActionTypes } from '../actions/movies.actions';
import { IGetMoviesData } from '../../interfaces/get-movies-data.interface';

export interface IState extends IGetMoviesData {
}

const initialState: IState = {
  movies: [],
  pageCount: undefined!,
};

export function reducer(state: IState = initialState, actions: MoviesActions) {
  switch (actions.type) {
    case MoviesActionTypes.getMoviesSuccess:
      return actions.payload;
    default:
      return state;
  }
}
