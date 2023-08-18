import { CreateMovieDto } from '../movie/dto/createMovie.dto';

export const convertNumbersToStrings = (obj: CreateMovieDto) => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else {
      obj[key] = obj[key];
    }
  }

  return obj;
};
