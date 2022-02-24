"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDirective = void 0;
const graphql_1 = require("graphql");
const apollo_server_express_1 = require("apollo-server-express");
const utils_1 = require("@graphql-tools/utils");
// Write here your own logic to get the user from accessToken
const getUserByAccessToken = (accessToken) => {
    return {
        id: 1,
        name: 'John Doe',
        token: accessToken // Example only. Remove this field later
    };
};
const authDirective = (schema, directiveName) => {
    return (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            const authDirective = (0, utils_1.getDirective)(schema, fieldConfig, directiveName)?.[0];
            if (authDirective) {
                const { resolve = graphql_1.defaultFieldResolver } = fieldConfig;
                fieldConfig.resolve = function (source, args, context, info) {
                    const accessToken = context?.req?.headers?.['authorization'];
                    // Write here your own logic to get the user from accessToken
                    const user = getUserByAccessToken(accessToken);
                    if (!user) {
                        throw new apollo_server_express_1.ForbiddenError('not authorized');
                    }
                    return resolve(source, args, Object.assign(context, { user }), info);
                };
                return fieldConfig;
            }
        }
    });
};
exports.authDirective = authDirective;
//# sourceMappingURL=index.js.map