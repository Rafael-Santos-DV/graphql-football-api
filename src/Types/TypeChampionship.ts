import { PropertyField } from './TypesGlobal';

export type ChampionshipType = {
  name: string;

  id: string;

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

// export type Countries = 'brasi' | 'alemanha' | 'espanha';

// export type Championship = 'serie-a' | 'serie-b' | 'serie-c' | 'bundesliga' | 'bundeslinga-2';

// export type AllChampionship = ChampionshipBrazil | ChampionshipAlemanha;
