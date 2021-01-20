import { combineEpics } from 'redux-observable';
import { getMoviesEpics } from './movies.epics';

export const moviesEpics = combineEpics(
  getMoviesEpics,
);
