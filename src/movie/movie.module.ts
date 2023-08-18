import { Module } from '@nestjs/common';

import { IsArrayContainsAllowedValues } from './dto/validators/isArrayContainsAllowedValues';
import { MovieRepository } from './data/dao/movie.repository';
import { MovieService } from './data/services/movie.service';
import { MovieController } from './movie.controller';

@Module({
  providers: [MovieService, MovieRepository, IsArrayContainsAllowedValues],
  controllers: [MovieController],
})
export class MovieModule {}
