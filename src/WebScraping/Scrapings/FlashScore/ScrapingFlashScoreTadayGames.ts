import { load } from 'cheerio';
import ContractTodayGames from '../../../Contracts/ContractTodayGames';
import { TypeTodayGame } from '../../../Types/TypeTodayGames';

class ScrapingFlashScoreTodayGames implements ContractTodayGames {
  constructor(readonly documentHTML: string) {}

  scrapingTodayGames(): TypeTodayGame[] {
    const data = [] as TypeTodayGame[];

    const $ = load(this.documentHTML);

    $('.leagues--live.contest--leagues .event__match').each(function (i) {
      const query = $(this);

      const status = query.find('.event__stage--block').text();

      const match = {
        championship: `${$('.leagues--live .event__title--type').text()} ${$('.leagues--live .event__title--name').text()}`,
        status: status || 'Não iniciado',
        eventTime: query.find('.event__time').text() || 'iniciado',
        homeTeam: {
          name: query.find('.event__participant--home').text(),
          imageUrl: `https://www.flashscore.com.br${query.find('.event__logo--home').attr('src')}`,
          goals: query.find('.event__score--home').text(),
        },
        visitantTeam: {
          name: query.find('.event__participant--away').text(),
          imageUrl: `https://www.flashscore.com.br${query.find('.event__logo--away').attr('src')}`,
          goals: query.find('.event__score--away').text(),
        },
      };

      data.push(match);
    });

    return data;
  }
}

export default ScrapingFlashScoreTodayGames;
