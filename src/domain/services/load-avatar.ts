import { AvatarRepository, UsersRepository } from "@/infra/repositories";
import { Avatar } from "../entities";

export class LoadAvatarService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly avatarRepository: AvatarRepository
  ) {}

  async load(id: number) {
    const user = await this.usersRepository.findById(id);
    const avatar = await this.avatarRepository.getAvatar(user.avatarId);

    return avatar;
  }

  async loadList(): Promise<LoadAvatarService.Result[]> {
    const avatar = await this.avatarRepository.getAvatarList();

    return avatar;
  }
}

export namespace LoadAvatarService {
  export type Result = Avatar;
}
