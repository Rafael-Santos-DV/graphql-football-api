import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeChampionship from '../../ObjectTypes/ObjectTypeChampionship';
import Providers from '../../Providers/Providers';
import { ChampionshipType } from '../../Types/TypeChampionship';
import ScrapingFlashScoreChampionship from '../../WebScraping/Scrapings/FlashScore/ScrapingFlashScoreChampionship';
import Browser from '../../WebScraping/Browser';

@Resolver()
class ResolverChampionship {
  @Query(() => [ObjectTypeChampionship])
  async championshipTable(
    @Arg('country') country: string,
    @Arg('championship', () => String) championship: string,
    @Arg('limit', { nullable: true }) limit?: number
  ): Promise<ChampionshipType[]> {
    const browser = new Browser(Providers.flashScoreChampionship(country, championship));

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreChampionship(WINDOW_DOCUMENT.HTML).scrapingChampionshipTable();
    return data.slice(0, limit);
  }
}

export default ResolverChampionship;
