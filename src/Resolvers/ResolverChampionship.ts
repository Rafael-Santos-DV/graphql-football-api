import { Arg, Query, Resolver } from 'type-graphql';
import TypeChampionship from '../ObjectTypes/TypeChampionship';
import Providers from '../Providers/Providers';
import { ChampionshipBrazil, ChampionshipType } from '../Types/TypeChampionship';
import Browser from '../WebScraping/Browser';
import ScrapingFlashChampionship from '../WebScraping/Scrapings/ScrapingFlashScoreChampionship';
import nodeCache from 'node-cache';

@Resolver()
class ResolverChampionship {
  @Query(() => [TypeChampionship])
  async championshipTable(@Arg('championship', (type) => String) championship: ChampionshipBrazil): Promise<ChampionshipType[]> {
    const browser = new Browser(Providers.fleshScoreChampionship(championship));

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashChampionship(WINDOW_DOCUMENT.HTML).showChampionshipTable();
    return data;
  }
}

export default ResolverChampionship;
