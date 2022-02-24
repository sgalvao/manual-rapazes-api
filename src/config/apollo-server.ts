import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema'

import resolvers from '@/graphql/resolvers'
import typeDefs from '@/graphql/type-defs'
import { authDirective } from '@/graphql/directives'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const schemaWithAuthDirective = authDirective(schema, 'auth')

export const startApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    schema: schemaWithAuthDirective,
    context: ({ req }) => ({ req }),
    introspection: true
  })

  await server.start()

  server.applyMiddleware({ app })
}
