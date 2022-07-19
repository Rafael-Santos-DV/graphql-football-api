import { Cheerio, Element, load } from 'cheerio';
import ContractLastMatches from '../../../Contracts/ContractLastMatches';
import { LastMatchesType } from '../../../Types/TypeLastMatches';

class ScrapingFlashScoreMatches implements ContractLastMatches {
  constructor(readonly documentHTML: string) {}
  scrapingLastMatches(): LastMatchesType[] {
    let index = -1;

    const $ = load(this.documentHTML);
    const headers = [] as Cheerio<Element>[];
    const allElements = [] as Cheerio<Element>[];
    const JSON_MATCHES = [] as LastMatchesType[];

    $('.sportName > div').each(function () {
      const query = $(this); // div

      if (query.hasClass('event__header')) {
        headers.push(query);
      }

      allElements.push(query);
    });

    for (const element of allElements) {
      if (element.hasClass('event__header')) {
        ++index;
        continue;
      }

      const $findHeader = headers[index];

      JSON_MATCHES.push({
        championship: `${$findHeader.find('.event__title--type').text()} ${$findHeader.find('.event__title--name').text()}`,
        eventTime: element.find('.event__time').text(),
        homeTeam: {
          goals: element.find('.event__score--home').text(),
          imageUrl: `https://www.flashscore.com.br${element.find('.event__logo--home').attr('src')}` ?? '',
          name: element.find('.event__participant--home').text(),
        },
        visitantTeam: {
          goals: element.find('.event__score--away').text(),
          imageUrl: `https://www.flashscore.com.br${element.find('.event__logo--away').attr('src')}` ?? '',
          name: element.find('.event__participant--away').text(),
        },
      });
    }

    return JSON_MATCHES;
  }
}

export default ScrapingFlashScoreMatches;
