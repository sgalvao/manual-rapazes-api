import { mergeTypeDefs } from "@graphql-tools/merge";

import baseTypes from "./base";
import userTypes from "./user";
import ruleTypes from "./rule";
import avatarTypes from "./avatar";

export default mergeTypeDefs([baseTypes, userTypes, ruleTypes, avatarTypes]);
