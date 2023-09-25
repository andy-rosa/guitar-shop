import { ConflictException, Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { AuthUserError } from './authentication.constant';
import {LoginUserDto} from "./dto/login-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserMongoDBRepository} from "../user/user-mongodb.repository";
import {JwtService} from "@nestjs/jwt";
import {TokenPayload, User} from "@backend/shared/app-types";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserMongoDBRepository,
    private readonly jwtService: JwtService,
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, passwordHash: password, name} = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AuthUserError.Exists);
    }

    const user = {
      email,
      name,
      passwordHash: '',
    }

    const userEntity = new UserEntity(user)
    await userEntity.setPassword(password);

    return await this.userRepository.create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, passwordHash: password} = dto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new ConflictException(AuthUserError.NotFound);
    }

    const userEntity = new UserEntity(existUser);
    if (!await userEntity.comparePassword(password)) {
      throw new ConflictException(AuthUserError.PasswordWrong);
    }

    return userEntity.toObject();
  }

  public async getUser(id: string) {
    return this.userRepository.findById(id);
  }

  public async createUserToken(user: User) {
    const payload: TokenPayload = {
      sub: user._id,
      email: user.email,
      name: user.name,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
