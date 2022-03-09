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
    const user = await this.usersRepository.findByEmail(params.email);
    if (!user) {
      throw new Error("Usuário ou senha invalida!");
    }

    const isValidPassword = await this.hashProvider.compareHash(
      params.password,
      user.password
    );

    if (!isValidPassword) {
      throw new Error("Usuário ou senha invalida!");
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
