import { Arg, Query, Resolver } from 'type-graphql';
import TypeChampionship from '../ObjectTypes/TypeChampionship';

@Resolver()
class ResolverChampionship {
  @Query(() => [TypeChampionship])
  async championshipTable(@Arg('championship') championship: string): Promise<[{ name: string }]> {
    return [
      {
        name: 'world',
      },
    ];
  }
}

export default ResolverChampionship;
