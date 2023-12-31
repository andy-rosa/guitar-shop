import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {AuthenticationModule} from "./authentication/authentication.module";

@Module({
  imports: [UserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
