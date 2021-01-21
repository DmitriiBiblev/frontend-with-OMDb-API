import { IMovieCard } from './movie-card.interface';

export interface IGetMoviesResponse {
  Response: string
  Search: IMovieCard[]
  totalResults: string
}
