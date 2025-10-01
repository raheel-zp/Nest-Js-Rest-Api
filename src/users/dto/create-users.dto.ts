import { IsString, IsNotEmpty } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsString()
  @IsNotEmpty()
  photo!: string;
  @IsString()
  @IsNotEmpty()
  phone!: string;
}
