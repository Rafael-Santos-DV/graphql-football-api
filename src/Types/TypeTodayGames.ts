import type { PropertyFieldTeam } from './TypesGlobal';

export type TypeTodayGame = {
  championship: string;

  status: number | 'não iniciado' | 'encerrado';

  eventTime: number | 'iniciado';

  homeTeam: PropertyFieldTeam;

  visitantTeam: PropertyFieldTeam;
};
