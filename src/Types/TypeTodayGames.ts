import type { PropertyFieldTeam } from './TypesGlobal';

export type TypeTodayGame = {
  championship: string;

  status: string;

  eventTime: string;

  homeTeam: PropertyFieldTeam;

  visitantTeam: PropertyFieldTeam;
};
