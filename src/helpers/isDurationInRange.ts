import { IMovie } from '../types/global';

export const isDurationInRange = (movies: IMovie[], duration: number) =>
  movies.filter(
    (movie) => movie.runtime >= duration - 10 && movie.runtime <= duration + 10,
  );
