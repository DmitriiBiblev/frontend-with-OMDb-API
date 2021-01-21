import { IMovieCard } from './movie-card.interface';

export interface IGetMoviesData {
  movies: IMovieCard[]
  pageCount: number
}
