export interface Token {
  id?: string;
  tokenId: string;
  createdAt: Date;
  userId: string;
  expiresIn: Date;
}

export interface TokenPayload {
  sub: string;
  email: string;
  name: string;
}
