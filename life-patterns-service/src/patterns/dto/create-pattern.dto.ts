import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

import { IsValidGrid } from '../validators/is-valid-grid.decorator';

export class CreatePatternDto {
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(2000)
  @IsValidGrid()
  grid!: (0 | 1 | boolean)[][];

  @IsInt()
  @Min(1)
  rows!: number;

  @IsInt()
  @Min(1)
  cols!: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  createdBy?: string;
}
