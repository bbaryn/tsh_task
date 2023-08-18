import { IMovie } from '../types/global';

export const findHighestId = (movies: IMovie[]) => {
  let highestId = 0;

  for (const movie of movies) {
    if (movie.id > highestId) {
      highestId = movie.id;
    }
  }

  return highestId;
};
