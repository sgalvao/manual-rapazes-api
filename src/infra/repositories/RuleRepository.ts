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

  async approveRule(ruleId: number): Promise<CreateRuleService.Result> {
    const rule = await prisma.rules.update({
      where: {
        id: ruleId,
      },
      data: {
        status: "APPROVED",
      },
    });

    return rule;
  }

  async loadById(ruleId: number): Promise<CreateRuleService.Result[]> {
    const rules = await prisma.rules.findMany({
      where: {
        id: ruleId,
      },
      include: {
        votes: {
          where: {
            value: true,
          },
        },
      },
    });

    return rules;
  }
}
