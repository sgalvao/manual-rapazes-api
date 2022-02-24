import { CreateAccountService } from "@/domain/services";
import { AuthenticationService } from "@/domain/services/authentication";
import { HashProvider, JwtProvider } from "@/infra/providers";
import { UsersRepository } from "@/infra/repositories/UserRepository";

const makeCreateAccount = () => {
  const userRepository = new UsersRepository();
  const hashProvider = new HashProvider();
  const createAccountService = new CreateAccountService(
    userRepository,
    hashProvider
  );

  return createAccountService;
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
  },
  Mutation: {
    createUser: async (_, { user }) => makeCreateAccount().create(user),
  },
};
