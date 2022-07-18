import { load } from 'cheerio';
import ContractChampionship from '../../Contracts/ContractChampionship';
import { ChampionshipType } from '../../Types/TypeChampionship';

class ScrapingChampionship implements ContractChampionship {
  constructor(readonly documentHTML: string) {}

  showChampionshipTable(): ChampionshipType[] {
    const data = [] as ChampionshipType[];
    const $ = load(this.documentHTML);

    $('.ui-table__row').each(function (i) {
      const query = $(this);

      const golsScoredAndTaken = query.find('.table__cell--value').eq(4).text().split(':');

      let prevData = {
        name: query.find('.tableCellParticipant__name').text(),
        position: query.find('.tableCellRank').text(),
        points: query.find('.table__cell--points').text(),
        imageUrl: `https://www.flashscore.com.br${query.find('.participant__image').attr('src')}`,
        matches: query.find('.table__cell--value').eq(0).text(),
        winners: query.find('.table__cell--value').eq(1).text(),
        draws: query.find('.table__cell--value').eq(2).text(),
        loss: query.find('.table__cell--value').eq(3).text(),
        goalsScored: golsScoredAndTaken[0],
        goalsTaken: golsScoredAndTaken[1],
        goalsDifference: Number(golsScoredAndTaken[0]) - Number(golsScoredAndTaken[1]),
      };

      data.push(prevData);
    });

    return data;
  }
}

export default ScrapingChampionship;
