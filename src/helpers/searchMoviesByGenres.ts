import { Genres, IMovie } from '../types/global';

export const searchMoviesByGenres = (genres: Genres[], movies: IMovie[]) => {
  const matchedMovies: IMovie[] = movies.filter((movie) =>
    movie.genres.some((genre) => genres.includes(genre)),
  );

  function calculateMatchingGenres(movieGenres) {
    return genres.filter((genre) => movieGenres.includes(genre)).length;
  }

  const sortedResults = matchedMovies.sort((movieA, movieB) => {
    const matchingGenresA = calculateMatchingGenres(movieA.genres);
    const matchingGenresB = calculateMatchingGenres(movieB.genres);

    if (matchingGenresA > matchingGenresB) {
      return -1;
    } else if (matchingGenresA < matchingGenresB) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedResults;
};
