import { LastMatchesType } from '../Types/TypeLastMatches';

export default interface ContractLastMatches {
  documentHTML: string;
  scrapingLastMatches: () => LastMatchesType[];
}
