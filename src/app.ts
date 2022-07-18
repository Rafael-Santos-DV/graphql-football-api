import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import ResolverChampionship from './Resolvers/ResolverChampionship';

async function main() {
  const schema = await buildSchema({
    resolvers: [ResolverChampionship],
    emitSchemaFile: path.resolve(__dirname, 'Utils', 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`running in port ${url}`);
}

main();
