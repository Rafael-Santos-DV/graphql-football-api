import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType()
class Team {
  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  goals: string;
}

@ObjectType()
class ObjectTypeLastMatches {
  @Field()
  championship: string;

  @Field()
  eventTime: string;

  @Field()
  teamOne: Team;

  @Field()
  teamTwo: Team;

  @Field()
  information?: string;
}

export default ObjectTypeLastMatches;
