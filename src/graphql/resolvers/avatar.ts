import { LoadAvatarService } from "@/domain/services";
import { AvatarRepository, UsersRepository } from "@/infra/repositories";

const makeLoadAvatarService = () => {
  const usersRepository = new UsersRepository();
  const avatarRepository = new AvatarRepository();
  const loadAvatarService = new LoadAvatarService(
    usersRepository,
    avatarRepository
  );
  return loadAvatarService;
};

export default {
  Query: {
    loadAvatar: (_, args) => {
      console.log("🚀 ~ file: user.ts ~ line 31 ~ args", args);
      return makeLoadAvatarService().load(args);
    },
    getAvatarList: (_) => {
      return makeLoadAvatarService().loadList();
    },
  },
};
