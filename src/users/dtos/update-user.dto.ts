import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateDtoUser {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
