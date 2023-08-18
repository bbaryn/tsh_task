import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  Validate,
} from 'class-validator';

import { IsArrayContainsAllowedValues } from './validators/isArrayContainsAllowedValues';
import { Genres } from '../../types/global';

export class CreateMovieDto {
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @Min(1)
  @IsNumber()
  @IsInt()
  runtime: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @Validate(IsArrayContainsAllowedValues)
  genres: Genres[];

  @IsNotEmpty()
  @MaxLength(255)
  director: string;

  @IsOptional()
  actors: string;

  @IsOptional()
  plot: string;

  @IsOptional()
  posterUrl: string;
}
