import { mergeTypeDefs } from "@graphql-tools/merge";

import baseTypes from "./base";
import userTypes from "./user";
import ruleTypes from "./rule";

export default mergeTypeDefs([baseTypes, userTypes, ruleTypes]);
