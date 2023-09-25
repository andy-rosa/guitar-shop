import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModel, UserSchema} from "./user.model";
import {UserMongoDBRepository} from "./user-mongodb.repository";

@Module({
  imports: [
      MongooseModule.forFeature([
          {name: UserModel.name, schema: UserSchema}
      ])
  ],
  providers: [UserMongoDBRepository],
  exports: [UserMongoDBRepository],
})
export class UserModule {}
