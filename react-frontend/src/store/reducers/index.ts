import { combineReducers } from 'redux';
import * as movies from './movies/movies.reducer';

export interface IRootState {
  movies: movies.IState
}

export default combineReducers({
  movies: movies.reducer,
});
