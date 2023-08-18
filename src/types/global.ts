export const GENRES = [
  'Comedy',
  'Fantasy',
  'Crime',
  'Drama',
  'Music',
  'Adventure',
  'History',
  'Thriller',
  'Animation',
  'Family',
  'Mystery',
  'Biography',
  'Action',
  'Film-Noir',
  'Romance',
  'Sci-Fi',
  'War',
  'Western',
  'Horror',
  'Musical',
  'Sport',
] as const;

export type Genres = typeof GENRES;

export interface IMovie {
  id: number;
  title: string;
  year: number;
  runtime: number;
  genres: Genres[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

export interface IDatabase {
  genres: Genres[];
  movies: IMovie[];
}
