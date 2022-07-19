export type TeamType = {
  name: string;
  imageUrl: string;
  goals: string;
};

export type LastMatchesType = {
  championship: string;
  eventTime: string;
  homeTeam: TeamType;
  visitantTeam: TeamType;
};
