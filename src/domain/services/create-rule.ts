import { Rule } from "@/domain/entities/";
import { RuleRepository } from "@/infra/repositories";

export class CreateRuleService {
  constructor(private readonly rulesRepository: RuleRepository) {}

  public async create(
    param: CreateRuleService.Params
  ): Promise<CreateRuleService.Result> {
    return this.rulesRepository.create({ ...param });
  }
}

export namespace CreateRuleService {
  export type Params = {
    name: string;
    description: string;
    authorId: number;
  };
  export type Result = Rule;
}
