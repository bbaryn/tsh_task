import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { IMovie } from '../types/global';
import { MovieService } from './data/services/movie.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { FindMoviesDto } from './dto/findMovies.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findMovies(
    @Query(new ValidationPipe({ transform: true })) query: FindMoviesDto,
  ): Promise<IMovie[]> {
    return this.movieService.findMovies(query);
  }

  @Post('/add')
  createMovie(
    @Body(ValidationPipe) createMovieDto: CreateMovieDto,
  ): Promise<IMovie> {
    return this.movieService.createMovie(createMovieDto);
  }
}
