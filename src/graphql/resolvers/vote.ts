import { CreateVoteService } from "@/domain/services";
import { VoteRepository } from "@/infra/repositories/";

const makeCreateVote = () => {
  const voteRepository = new VoteRepository();
  const createVoteService = new CreateVoteService(voteRepository);
  return createVoteService;
};

export default {
  Mutation: {
    createVote: (_, { args }, { userId }) => {
      console.log(args);
      makeCreateVote().create({
        ...args,
        userId,
      });
    },
  },
};
