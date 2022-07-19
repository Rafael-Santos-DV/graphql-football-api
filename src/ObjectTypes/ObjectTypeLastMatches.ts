import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('Team')
class InfoTeam {
  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  goals: string;
}

@ObjectType()
class ObjectTypeLastMatches {
  @Field(() => ID)
  championship: string;

  @Field()
  eventTime: string;

  @Field()
  homeTeam: InfoTeam;

  @Field()
  visitantTeam: InfoTeam;
}

export default ObjectTypeLastMatches;
