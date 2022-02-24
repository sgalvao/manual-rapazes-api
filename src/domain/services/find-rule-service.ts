import { RuleRepository } from "@/infra/repositories";
import { Rule } from "../entities";

export class FindRuleService {
  constructor(private readonly ruleRepository: RuleRepository) {}

  async findAll(): Promise<FindRuleService.Result[]> {
    const rules = this.ruleRepository.findAll();

    return rules;
  }
}

export namespace FindRuleService {
  export type Params = {
    id: number;
    name: string;
    description: string;
    authorId: number;
  };
  export type Result = Rule;
}
