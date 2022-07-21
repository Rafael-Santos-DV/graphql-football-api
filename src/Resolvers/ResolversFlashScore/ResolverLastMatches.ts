import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeLastMatches from '../../ObjectTypes/ObjectTypeLastMatches';
import Providers from '../../Providers/Providers';
import { LastMatchesType } from '../../Types/TypeLastMatches';
import Browser from '../../WebScraping/Browser';
import ScrapingFlashScoreMatches from '../../WebScraping/Scrapings/FlashScore/ScrapingFlashScoreLastMatches';

@Resolver()
class ResolverLastMatches {
  @Query(() => [ObjectTypeLastMatches])
  async lastMatches(@Arg('id') id: string, @Arg('limit', { nullable: true }) limit?: number): Promise<LastMatchesType[]> {
    const object = process.env.DEV_FLASHSCORE_TEST
      ? Providers.flashScoreProviderTest('test', 'testing')
      : Providers.flashScoreLastMatches(id);

    const browser = new Browser(object);

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreMatches(WINDOW_DOCUMENT.HTML).scrapingLastMatches();

    return data.slice(0, limit);
  }
}

export default ResolverLastMatches;
