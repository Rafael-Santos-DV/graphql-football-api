import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeTodayGames from '../../ObjectTypes/ObjectTypeTodayGames';
import Providers from '../../Providers/Providers';
import { TypeTodayGame } from '../../Types/TypeTodayGames';
import Browser from '../../WebScraping/Browser';
import ScrapingFlashScoreTodayGames from '../../WebScraping/Scrapings/FlashScore/ScrapingFlashScoreTadayGames';

@Resolver()
class ResolverTodayGames {
  @Query(() => [ObjectTypeTodayGames])
  async todayMatches(
    @Arg('country') country: string,
    @Arg('championship', () => String) championship: string,
    @Arg('limit', { nullable: true }) limit?: number
  ): Promise<TypeTodayGame[]> {
    const object = process.env.DEV_FLASHSCORE_TEST
      ? Providers.flashScoreProviderTest(country, championship)
      : Providers.flashScoreTodayMatches(country, championship);

    const browser = new Browser(object);

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreTodayGames(WINDOW_DOCUMENT.HTML).scrapingTodayGames();

    return data.slice(0, limit);
  }
}

export default ResolverTodayGames;
