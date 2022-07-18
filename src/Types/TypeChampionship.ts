import { PropertyField } from './TypesGlobal';

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

export type ChampionshipBrazil = 'brasileirao-a' | 'brasileirao-b' | 'brasileirao-c';
