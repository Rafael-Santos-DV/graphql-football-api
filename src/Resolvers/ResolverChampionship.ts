import { Arg, Query, Resolver } from 'type-graphql';
import TypeChampionship from '../ObjectTypes/TypeChampionship';
import Providers from '../Providers/Providers';
import { ChampionshipType } from '../Types/TypeChampionship';
import Browser from '../WebScraping/Browser';
import ScrapingChampionship from '../WebScraping/Scrapings/ScrapingChampionship';

@Resolver()
class ResolverChampionship {
  @Query(() => [TypeChampionship])
  async championshipTable(@Arg('championship') championship: string): Promise<ChampionshipType[]> {
    const browser = await new Browser({
      name: Providers.fleshScore.name,
      provider: Providers.fleshScore.Provider,
    }).startBrowser();

    const data = new ScrapingChampionship(browser.HTML).showChampionshipTable();

    return data;
  }
}

export default ResolverChampionship;
