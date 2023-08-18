import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Validate,
} from 'class-validator';

import { toNumber } from '../../helpers/toNumber';
import { IsArrayContainsAllowedValues } from './validators/isArrayContainsAllowedValues';
import { Genres } from '../../types/global';

export class FindMoviesDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @Min(1)
  @IsInt()
  @IsOptional()
  duration: number;

  @IsString({ each: true })
  @Transform(({ value }) =>
    value
      ?.replace(/\s/g, '')
      .split(',')
      .map((genre: string) => {
        const trimmedGenre = genre.trim();
        return (
          trimmedGenre.charAt(0).toUpperCase() +
          trimmedGenre.slice(1).toLowerCase()
        );
      }),
  )
  @Validate(IsArrayContainsAllowedValues)
  @IsOptional()
  genres: Genres[];
}
