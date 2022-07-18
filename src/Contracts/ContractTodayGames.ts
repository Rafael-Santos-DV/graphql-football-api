import { TypeTodayGame } from '../Types/TypeTodayGames';

export default interface ContractTodayGames {
  documentHTML: string;
  scrapingTodayGames: () => TypeTodayGame[];
}
