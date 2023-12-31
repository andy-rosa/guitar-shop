import { ApiProperty } from "@nestjs/swagger";
import {Expose, Transform} from "class-transformer";

export class UserRdo {

  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keka'
  })
  @Expose()
  public name: string;
}
