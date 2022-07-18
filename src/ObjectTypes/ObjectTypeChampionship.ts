import { Field, ID, ObjectType } from 'type-graphql';

type PropertyField = number | string;

@ObjectType()
class ObjectTypeChampionship {
  @Field(() => ID)
  name: string;

  @Field(() => Number)
  position: PropertyField;

  @Field(() => Number)
  points: PropertyField;

  @Field()
  imageUrl: string;

  @Field(() => String)
  matches: PropertyField;

  @Field(() => Number)
  winners: PropertyField;

  @Field(() => Number)
  draws: PropertyField;

  @Field(() => Number)
  loss: PropertyField;

  @Field(() => Number)
  goalsScored: PropertyField;

  @Field(() => Number)
  goalsTaken: PropertyField;

  @Field(() => Number)
  goalsDifference: PropertyField;
}

export default ObjectTypeChampionship;
