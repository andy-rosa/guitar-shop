import {TokenPayload, User} from "@backend/shared/app-types";

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user._id,
    email: user.email,
    name: user.name,
  };
}
