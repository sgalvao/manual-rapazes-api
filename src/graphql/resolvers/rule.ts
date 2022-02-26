import { CreateRuleService } from "@/domain/services";
import { FindRuleService } from "@/domain/services/find-rule-service";
import { RuleRepository } from "@/infra/repositories";

const makeCreateRule = () => {
  const ruleRepository = new RuleRepository();
  const createRuleService = new CreateRuleService(ruleRepository);

  return createRuleService;
};

const makeFindRules = () => {
  const ruleRepository = new RuleRepository();
  const findRulesService = new FindRuleService(ruleRepository);

  return findRulesService;
};

export default {
  Query: { findAllRules: () => makeFindRules().findAll() },

  Mutation: {
    createRule: async (_, { rule }, { userId }) => {
      console.log("🚀 ~ file: rule.ts ~ line 14 ~ createRule: ~ rule", rule);
      return makeCreateRule().create({ ...rule, authorId: userId });
    },
  },
};
