
import { findHighestId } from '../helpers/findHighestId';
import { mockMovies } from './mocks';

describe('findHighestId', () => {
  it('should find the highest ID from a list of movies', () => {
    const highestId = findHighestId(mockMovies);
    expect(highestId).toBe(3);
  });

  it('should return 0 for an empty list of movies', () => {
    const movies = [];
    const highestId = findHighestId(movies);
    expect(highestId).toBe(0);
  });
});