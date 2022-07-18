import { Query, Resolver } from 'type-graphql';
import ObjectTypeTodayGames from '../ObjectTypes/ObjectTypeTodayMatches';

@Resolver()
class ResolverTodayGames {
  @Query(() => [ObjectTypeTodayGames])

}

export default ResolverTodayGames;
