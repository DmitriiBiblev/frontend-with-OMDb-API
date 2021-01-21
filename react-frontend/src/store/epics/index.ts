import { combineEpics } from 'redux-observable';
import { getMoviesEpics } from './movies.epics';

export const rootEpics = combineEpics(
  getMoviesEpics,
);
