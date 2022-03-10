import { prisma } from "@/config/prisma-client";
import { LoadAvatarService } from "@/domain/services";
import { UsersRepository } from "./UserRepository";

export class AvatarRepository {
  async getAvatar(id: number): Promise<LoadAvatarService.Result> {
    const avatar = await prisma.avatar.findFirst({
      where: {
        id,
      },
    });
    return avatar;
  }

  async getAvatarList(): Promise<LoadAvatarService.Result[]> {
    const avatar = await prisma.avatar.findMany();

    return avatar;
  }
}
