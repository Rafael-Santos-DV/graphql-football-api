import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

// Resolvers
import ResolverChampionship from './Resolvers/ResolverChampionship';
import ResolverTodayGames from './Resolvers/ResolverTodayGames';
import ResolverLastMatches from './Resolvers/ResolverLastMatches';

async function main() {
  const schema = await buildSchema({
    resolvers: [ResolverChampionship, ResolverTodayGames, ResolverLastMatches],
    emitSchemaFile: path.resolve(__dirname, 'Utils', 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`running in port ${url}`);
}

main();
