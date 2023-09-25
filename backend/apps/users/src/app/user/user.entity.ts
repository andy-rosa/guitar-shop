import {Entity} from "@backend/util/util-types";
import {User} from "@backend/shared/app-types";
import { genSalt, hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity extends Entity<User> implements User {
  public _id?: string;
  public email: string;
  public name: string;
  public passwordHash: string;

  constructor(user: User) {
    super(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await compare(password, this.passwordHash);
  }
}
