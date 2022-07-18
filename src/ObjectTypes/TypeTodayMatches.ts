import { Field, ObjectType } from 'type-graphql';

type PropertyFieldTeam = {
  name: string;
  imageUrl: string;
  goals: number | string;
};

@ObjectType()
class TypeTodayMatches {
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

export default TypeTodayMatches;
