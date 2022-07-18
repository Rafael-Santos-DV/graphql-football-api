import { TypeTodayGame } from '../Types/TypeTodayGames';

export default interface ContractTodayGames {
  showTodayGames: () => TypeTodayGame[];
}
