type PropertyField = number | string;

type ChampionshipType = {
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

  goalsDiference: PropertyField;
};

export default interface ContractChampionship {
  showChampionshipTable: () => Promise<ChampionshipType[]>;
}
