/*
  Add your logic here to initialize a service of your choice
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

import env from './config/environment'
import mongoConnection from './db/instance'
import logger from './logger'

import resolvers from './resolvers'
import schemaText from './schema.graphql'
import { makeExecutableSchema } from 'graphql-tools'

const app = express()
export const PORT = 3000
const schema = makeExecutableSchema({
  typeDefs: [schemaText],
  resolvers
})

app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress((req) => ({
  schema,
  context: {
    token: req.header('Authorization')
  }
})))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

mongoConnection
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Listening on port ${PORT}`)
      logger.info(`Access GraphiQL by navigating to: http://localhost:${PORT}/graphiql`)
    })
  })
  .catch(() => {
    logger.error(`Couldn't connect to MongoDB instance: ${process.env.MONGO_URL}`)
  })

export default app
