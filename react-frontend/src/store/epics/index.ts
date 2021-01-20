import { combineEpics } from 'redux-observable';
import { moviesEpics } from './movies';

export const rootEpics = combineEpics(
  moviesEpics,
);
