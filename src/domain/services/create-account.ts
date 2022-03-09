import { User } from "@/domain/entities/User";
import { HashProvider } from "@/infra/providers/hash-provider";
import { WhitelistRepository } from "@/infra/repositories";
import { UsersRepository } from "@/infra/repositories/UserRepository";

export class CreateAccountService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly hashProvider: HashProvider,
    private readonly whitelistRepository: WhitelistRepository
  ) {}

  public async create(
    param: CreateAccountService.Params
  ): Promise<CreateAccountService.Result> {
    const isWhitelisted = await this.whitelistRepository.findByEmail(
      param.email
    );

    if (!isWhitelisted) {
      throw new Error("Usuário não está na whitelist!");
    }

    const validateEmail = await this.usersRepository.findByEmail(param.email);

    if (validateEmail) {
      throw new Error("Email já cadastrado!");
    }

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
    avatarId: number;
    password: string;
  };
  export type Result = User;
}
