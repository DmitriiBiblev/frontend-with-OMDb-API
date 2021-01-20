import { MoviesActions } from '../../actions/movies/movies.actions';

export interface IState {

}

export function reducer(state: any = null, actions: MoviesActions) {
  switch (actions.type) {
    default:
      return state;
  }
}
