import { RuleRepository } from "@/infra/repositories";
import { VoteRepository } from "@/infra/repositories/VoteRepository";
import { Vote } from "../entities";

export class CreateVoteService {
  constructor(private readonly voteRepository: VoteRepository) {}

  public async create(
    params: CreateVoteService.Params
  ): Promise<CreateVoteService.Result> {
    console.log("Service: ", params);

    return this.voteRepository.vote(params);
  }
}

export namespace CreateVoteService {
  export type Params = {
    userId: number;
    ruleId: number;
    value: boolean;
  };
  export type Result = Vote;
}
