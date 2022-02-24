import { User } from "@/domain/entities/User";
import { HashProvider } from "@/infra/providers/hash-provider";
import { UsersRepository } from "@/infra/repositories/UserRepository";

export class CreateAccountService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly hashProvider: HashProvider
  ) {}

  public async create(
    param: CreateAccountService.Params
  ): Promise<CreateAccountService.Result> {
    const passwordEncrypted = await this.hashProvider.createHash(
      param.password,
      10
    );

    return this.usersRepository.create({
      ...param,
      password: passwordEncrypted,
    });
  }
}

export namespace CreateAccountService {
  export type Params = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    password: string;
  };
  export type Result = User;
}
