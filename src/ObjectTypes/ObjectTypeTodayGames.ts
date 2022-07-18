import { Field, ObjectType, InputType } from 'type-graphql';
import type { PropertyFieldTeam } from '../Types/TypesGlobal';

@ObjectType()
@InputType('InfoTeam')
class Team {
  @Field(() => String)
  name: string;

  @Field(() => String)
  imageUrl: string;

  @Field(() => Number)
  goals: number | string;
}

@ObjectType()
class ObjectTypeTodayGames {
  @Field()
  championship: string;

  @Field(() => String)
  status: number | 'não iniciado' | 'encerrado';

  @Field(() => String)
  eventTime: number | 'iniciado';

  @Field(() => Team)
  homeTeam: PropertyFieldTeam;

  @Field(() => Team)
  visitantTeam: PropertyFieldTeam;
}

export default ObjectTypeTodayGames;
