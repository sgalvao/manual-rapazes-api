import { CreateRuleService } from "@/domain/services";
import { prisma } from "@/config/prisma-client";

export class RuleRepository {
  async create(
    params: CreateRuleService.Params
  ): Promise<CreateRuleService.Result> {
    const rule = await prisma.rules.create({
      data: {
        name: params.name,
        description: params.description,
        authorId: params.authorId,
      },
      include: {
        author: true,
      },
    });

    return rule;
  }

  async findAll(): Promise<CreateRuleService.Result[]> {
    const rules = await prisma.rules.findMany({
      include: {
        author: true,
      },
    });
    return rules;
  }
}
