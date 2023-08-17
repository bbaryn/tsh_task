import { Module } from '@nestjs/common';

import { MovieRepository } from './data/dao/movie.repository';
import { MovieService } from './data/services/movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [],
  providers: [MovieService, MovieRepository],
  controllers: [MovieController],
})
export class MovieModule {}
