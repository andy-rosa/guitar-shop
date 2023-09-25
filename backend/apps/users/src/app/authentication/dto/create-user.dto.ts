import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";
import {AuthUserError} from "../authentication.constant";
import {User} from "@backend/shared/app-types";

export class CreateUserDto implements User{

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({},{ message: AuthUserError.EmailNotValid })
  email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keka'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  @IsString()
  passwordHash: string;
}
