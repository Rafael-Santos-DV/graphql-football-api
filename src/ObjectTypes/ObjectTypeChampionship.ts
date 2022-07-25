import { Field, ID, Int, ObjectType } from 'type-graphql';

type PropertyField = number | string;

@ObjectType()
class ObjectTypeChampionship {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  position: PropertyField;

  @Field(() => Int)
  points: PropertyField;

  @Field()
  imageUrl: string;

  @Field(() => String)
  matches: PropertyField;

  @Field(() => Int)
  winners: PropertyField;

  @Field(() => Int)
  draws: PropertyField;

  @Field(() => Int)
  loss: PropertyField;

  @Field(() => Int)
  goalsScored: PropertyField;

  @Field(() => Int)
  goalsTaken: PropertyField;

  @Field(() => Int)
  goalsDifference: PropertyField;
}

export default ObjectTypeChampionship;
