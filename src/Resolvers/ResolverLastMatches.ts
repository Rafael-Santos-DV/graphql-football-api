import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeLastMatches from '../ObjectTypes/ObjectTypeLastMatches';
import Providers from '../Providers/Providers';
import { LastMatchesType } from '../Types/TypeLastMatches';
import Browser from '../WebScraping/Browser';
import ScrapingFlashScoreMatches from '../WebScraping/Scrapings/ScrapingFlashScoreLastMatches';

@Resolver()
class ResolverLastMatches {
  @Query(() => [ObjectTypeLastMatches])
  async lastMatches(@Arg('id') id: string): Promise<LastMatchesType[]> {
    const browser = new Browser(Providers.flashScoreLastMatches(id));

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreMatches(WINDOW_DOCUMENT.HTML).scrapingLastMatches();

    return data;
  }
}

export default ResolverLastMatches;
