import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from 'src/enums/roles';
export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsEnum(Role, {
    message: 'Valid role is required',
  })
  role!: Role;
}
