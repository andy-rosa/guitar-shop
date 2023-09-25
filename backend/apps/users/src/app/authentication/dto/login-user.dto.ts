import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";
import {AuthUserError} from "../authentication.constant";
import {User} from "@backend/shared/app-types";

export class LoginUserDto implements Omit<User, 'name'>{
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({},{ message: AuthUserError.EmailNotValid })
  email: string;

  @IsString()
  passwordHash: string;
}
