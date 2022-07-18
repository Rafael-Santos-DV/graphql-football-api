import { Field, ObjectType } from 'type-graphql';
import type { PropertyFieldTeam } from '../Types/TypesGlobal';

@ObjectType()
class ObjectTypeTodayGames {
  @Field()
  championship: string;

  @Field()
  status: number | 'não iniciado' | 'encerrado';

  @Field()
  eventTime: number | 'iniciado';

  @Field()
  homeTeam: PropertyFieldTeam;

  @Field()
  visitantTeam: PropertyFieldTeam;
}

export default ObjectTypeTodayGames;
