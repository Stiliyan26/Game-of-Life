export class PatternResponseDto {
  id!: string;
  name!: string;
  description?: string;
  rows!: number;
  cols!: number;
  grid!: number[][];
  createdBy?: string;
  createdAt!: Date;
  updatedAt!: Date;
}
