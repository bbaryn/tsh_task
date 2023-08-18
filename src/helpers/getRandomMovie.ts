import { IMovie } from '../types/global';

export const getRandomMovie = (movies: IMovie[]) => [
  movies[Math.floor(Math.random() * movies.length)],
];
