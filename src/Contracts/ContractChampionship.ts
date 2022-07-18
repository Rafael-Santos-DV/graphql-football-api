import { ChampionshipType } from '../Types/TypeChampionship';

export default interface ContractChampionship {
  documentHTML: string;
  showChampionshipTable: () => ChampionshipType[];
}
