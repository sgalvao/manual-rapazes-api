import { CreateAccountService } from "@/domain/services";
import { prisma } from "@/config/prisma-client";

export class UsersRepository {
  async create(
    params: CreateAccountService.Params
  ): Promise<CreateAccountService.Result> {
    const user = await prisma.user.create({
      data: {
        email: params.email,
        name: params.name,
        password: params.password,
        avatar: params.avatar,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<CreateAccountService.Result> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
