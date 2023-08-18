import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { GENRES } from '../../../types/global';

@ValidatorConstraint({ name: 'IsArrayContainsAllowedValues', async: false })
export class IsArrayContainsAllowedValues
  implements ValidatorConstraintInterface
{
  validate(array: typeof GENRES) {
    return array.every((genre) => GENRES.includes(genre));
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must contain${GENRES.map((x) => ` ${x}`)} values`;
  }
}
