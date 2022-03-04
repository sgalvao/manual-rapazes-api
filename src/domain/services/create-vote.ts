import { RuleRepository } from "@/infra/repositories";
import { VoteRepository } from "@/infra/repositories/VoteRepository";
import { Vote } from "../entities";

export class CreateVoteService {
  constructor(private readonly voteRepository: VoteRepository) {}

  public async create(
    params: CreateVoteService.Params
  ): Promise<CreateVoteService.Result> {
    console.log("Service: ", params);
    if (params.value === undefined) {
      throw new Error("Você deve informar um valor para votar");
    }

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
