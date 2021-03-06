import { Arg, Int, Query, Resolver } from 'type-graphql';
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
    @Arg('limit', (type) => Int, { nullable: true }) limit?: number
  ): Promise<ChampionshipType[]> {
    const object = process.env.DEV_FLASHSCORE_TEST
      ? Providers.flashScoreProviderTest(country, championship)
      : Providers.flashScoreChampionship(country, championship);

    const browser = new Browser(object);

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreChampionship(WINDOW_DOCUMENT.HTML).scrapingChampionshipTable();
    return data.slice(0, limit);
  }
}

export default ResolverChampionship;
