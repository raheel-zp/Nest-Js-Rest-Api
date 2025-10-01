import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsArray()
  @IsNotEmpty()
  readonly artists!: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate!: Date;

  @IsNotEmpty()
  readonly duration!: number;
}
