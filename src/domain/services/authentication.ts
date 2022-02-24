import { HashProvider, JwtProvider } from "@/infra/providers";
import { UsersRepository } from "@/infra/repositories";
import { User } from "../entities";
import env from "@/config/env";

export class AuthenticationService {
  constructor(
    private readonly hashProvider: HashProvider,
    private readonly usersRepository: UsersRepository,
    private readonly jwtProvider: JwtProvider
  ) {}

  async auth(params: AuthenticationService.Params) {
    console.log(
      "🚀 ~ file: authentication.ts ~ line 14 ~ AuthenticationService ~ auth ~ params",
      params
    );
    const user = await this.usersRepository.findByEmail(params.email);
    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await this.hashProvider.compareHash(
      params.password,
      user.password
    );
    console.log(
      "🚀 ~ file: authentication.ts ~ line 27 ~ AuthenticationService ~ auth ~ isValidPassword",
      isValidPassword
    );

    if (!isValidPassword) {
      throw new Error(" password or username invalid!");
    }

    const token = this.jwtProvider.encryptToken(user.email, env.jwtSecret);

    return Object.assign(user, { token });
  }
}

export namespace AuthenticationService {
  export type Params = {
    email: string;
    password: string;
  };
  export type Result = User;
}
