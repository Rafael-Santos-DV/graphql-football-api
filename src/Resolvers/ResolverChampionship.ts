import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeChampionship from '../ObjectTypes/ObjectTypeChampionship';
import Providers from '../Providers/Providers';
import { ChampionshipBrazil, ChampionshipType } from '../Types/TypeChampionship';
import ScrapingFlashChampionship from '../WebScraping/Scrapings/ScrapingFlashScoreChampionship';
import Browser from '../WebScraping/Browser';

@Resolver()
class ResolverChampionship {
  @Query(() => [ObjectTypeChampionship])
  async championshipTable(@Arg('championship', (type) => String) championship: ChampionshipBrazil): Promise<ChampionshipType[]> {
    const browser = new Browser(Providers.fleshScoreChampionship(championship));

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashChampionship(WINDOW_DOCUMENT.HTML).showChampionshipTable();
    return data;
  }
}

export default ResolverChampionship;
