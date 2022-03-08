import { prisma } from "@/config/prisma-client";
import { CreateVoteService } from "@/domain/services/";

export class VoteRepository {
  async vote(params: CreateVoteService.Params) {
    console.log("REPOSITORY: ", params);
    const isValidVote = await prisma.votes.findFirst({
      where: {
        userId: params.userId,
        ruleId: params.ruleId,
      },
    });

    if (isValidVote) {
      throw new Error("Você já votou nessa regra");
    }

    const vote = await prisma.votes.create({
      data: {
        value: params.value,
        ruleId: params.ruleId,
      },
    });

    return vote;
  }
}
