import { BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

import { FindMoviesDto } from '../../..//movie/dto/findMovies.dto';
import { convertNumbersToStrings } from '../../../helpers/convertNumbersToStrings';
import { findHighestId } from '../../../helpers/findHighestId';
import { getRandomMovie } from '../../../helpers/getRandomMovie';
import { isDurationInRange } from '../../../helpers/isDurationInRange';
import { searchMoviesByGenres } from '../../../helpers/searchMoviesByGenres';
import { CreateMovieDto } from '../../../movie/dto/createMovie.dto';
import { IDatabase, IMovie } from '../../../types/global';

export class MovieRepository {
  dbPath = path.join(process.cwd(), './src/movie/data/database/db.json');

  async findMovies(query: FindMoviesDto): Promise<IMovie[]> {
    try {
      const jsonData = fs.readFileSync(this.dbPath, 'utf8');
      const { movies = [] } = JSON.parse(jsonData);

      if (query.duration && !query.genres) {
        return getRandomMovie(isDurationInRange(movies, query.duration));
      }

      if (!query.duration && query.genres) {
        return searchMoviesByGenres(query.genres, movies);
      }

      if (query.duration && query.genres) {
        const result = searchMoviesByGenres(query.genres, movies);

        return isDurationInRange(result, query.duration);
      }

      return getRandomMovie(movies);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async createMovie(data: CreateMovieDto): Promise<IMovie> {
    try {
      const jsonData = fs.readFileSync(this.dbPath, 'utf8');
      const transformedData = convertNumbersToStrings(data);

      const databaseData: IDatabase = JSON.parse(jsonData);

      const foundHighestId = findHighestId(databaseData.movies);

      const createdMovie = { id: foundHighestId + 1, ...transformedData };

      databaseData.movies.push(createdMovie);

      fs.writeFileSync(
        this.dbPath,
        JSON.stringify(databaseData, null, 2),
        'utf8',
      );

      return createdMovie;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
