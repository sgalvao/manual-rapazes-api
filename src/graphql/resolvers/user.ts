import { CreateAccountService } from "@/domain/services";
import { AuthenticationService } from "@/domain/services/authentication";
import { LoadUserByIdService } from "@/domain/services/";
import { HashProvider, JwtProvider } from "@/infra/providers";
import { WhitelistRepository } from "@/infra/repositories";
import { UsersRepository } from "@/infra/repositories/UserRepository";

const makeCreateAccount = () => {
  const userRepository = new UsersRepository();
  const hashProvider = new HashProvider();
  const whitelistRepository = new WhitelistRepository();
  const createAccountService = new CreateAccountService(
    userRepository,
    hashProvider,
    whitelistRepository
  );

  return createAccountService;
};

const makeLoadAccountById = () => {
  const userRepository = new UsersRepository();
  const loadAccountByIdService = new LoadUserByIdService(userRepository);
  return loadAccountByIdService;
};

const makeAuthentication = () => {
  const userRepository = new UsersRepository();
  const hashProvider = new HashProvider();
  const jwtProvider = new JwtProvider();
  const authenticationService = new AuthenticationService(
    hashProvider,
    userRepository,
    jwtProvider
  );
  return authenticationService;
};
export default {
  Query: {
    login: (_, args) => {
      console.log("🚀 ~ file: user.ts ~ line 31 ~ args", args);
      return makeAuthentication().auth(args);
    },
    loadUser: (_, args, { userId }) => {
      return makeLoadAccountById().load(args);
    },
  },
  Mutation: {
    createUser: async (_, { user }) => makeCreateAccount().create(user),
  },
};
