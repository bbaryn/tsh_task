import { Injectable } from '@nestjs/common';

import { IMovie } from '../../../types/global';
import { CreateMovieDto } from '../../dto/createMovie.dto';
import { FindMoviesDto } from '../../dto/findMovies.dto';
import { MovieRepository } from '../dao/movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  findMovies(query: FindMoviesDto): Promise<IMovie[]> {
    return this.movieRepository.findMovies(query);
  }

  createMovie(data: CreateMovieDto): Promise<IMovie> {
    return this.movieRepository.createMovie(data);
  }
}
