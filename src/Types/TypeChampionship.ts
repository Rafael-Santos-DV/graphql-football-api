type PropertyField = number | string;

export type ChampionshipType = {
  name: string;

  position: PropertyField;

  points: PropertyField;

  imageUrl: string;

  matches: PropertyField;

  winners: PropertyField;

  draws: PropertyField;

  loss: PropertyField;

  goalsScored: PropertyField;

  goalsTaken: PropertyField;

  goalsDifference: PropertyField;
};
