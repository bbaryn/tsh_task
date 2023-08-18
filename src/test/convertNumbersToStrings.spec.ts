import { convertNumbersToStrings } from '../helpers/convertNumbersToStrings';
import { CreateMovieDto } from '../movie/dto/createMovie.dto';

describe('convertNumbersToStrings', () => {
  const input = {
    id: 147,
    title: 'Lion King',
    year: 1991,
    runtime: 181,
    genres: ['Adventure', 'Action'],
    director: 'Hu Nołs',
  };

  const expectedOutput = {
    id: '147',
    title: 'Lion King',
    year: '1991',
    runtime: '181',
    genres: ['Adventure', 'Action'],
    director: 'Hu Nołs',
  };
  it('should convert numbers to strings', () => {
    const convertedObj = convertNumbersToStrings(
      input as unknown as CreateMovieDto,
    );
    expect(convertedObj).toEqual(expectedOutput);
  });

  it('should not modify non-number properties', () => {
    const convertedObj = convertNumbersToStrings(
      input as unknown as CreateMovieDto,
    );
    expect(convertedObj.title).toEqual(input.title);
    expect(convertedObj.genres).toEqual(input.genres);
    expect(convertedObj.director).toEqual(input.director);
  });
});
