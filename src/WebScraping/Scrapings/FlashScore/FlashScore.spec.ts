import {
  mockFlashScoreChampionshipTableHTML,
  mockFlashScoreHTMLerror,
  mockFlashScoreMatches,
  mockFlashScoreTodayMatchesNotInit,
} from '../../../Mocks/FlashScoreMocks/MockFlashScoreHtml';
import { mockFlashScoreChampionshipTableJson } from '../../../Mocks/FlashScoreMocks/MockFlashScoreJson';
import ScrapingFlashChampionship from './ScrapingFlashScoreChampionship';
import ScrapingFlashScoreMatches from './ScrapingFlashScoreLastMatches';
import ScrapingFlashScoreTodayGames from './ScrapingFlashScoreTadayGames';

import fs from 'fs';
import path from 'path';

describe('Scraping FlashScore -> ChampionshipTable', () => {
  it('should return an array with the specified amount', () => {
    expect(new ScrapingFlashChampionship(mockFlashScoreChampionshipTableHTML).scrapingChampionshipTable()).toHaveLength(1);
    expect(
      new ScrapingFlashChampionship(
        mockFlashScoreChampionshipTableHTML + mockFlashScoreChampionshipTableHTML + mockFlashScoreChampionshipTableHTML
      ).scrapingChampionshipTable()
    ).toHaveLength(3);

    expect(new ScrapingFlashChampionship(mockFlashScoreHTMLerror).scrapingChampionshipTable()).toHaveLength(0);
  });

  it('should return an array of objects equal to expected', () => {
    expect(
      new ScrapingFlashChampionship(mockFlashScoreChampionshipTableHTML + mockFlashScoreChampionshipTableHTML).scrapingChampionshipTable()
    ).toEqual([mockFlashScoreChampionshipTableJson, mockFlashScoreChampionshipTableJson]);

    expect(new ScrapingFlashChampionship(mockFlashScoreHTMLerror).scrapingChampionshipTable()).toEqual([]);
  });
});

describe('Scraping FlashScore -> ScoreMatches', () => {
  it('should return an array of empty', () => {
    expect(new ScrapingFlashChampionship(mockFlashScoreHTMLerror).scrapingChampionshipTable()).toEqual([]);
  });

  it('should return an array of objects equal to expected', () => {
    expect(new ScrapingFlashScoreMatches(mockFlashScoreMatches).scrapingLastMatches()).toEqual([
      {
        championship: 'Espanha La Liga',

        eventTime: '19:00 22/07',

        homeTeam: {
          name: 'Sul Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/image.png',
          goals: '2',
        },

        visitantTeam: {
          name: 'Norte Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/image.png',
          goals: '0',
        },
      },
    ]);
  });
});

describe('Scraping FlashScore -> TodayGames', () => {
  it('should return an array with 4 elements', async () => {
    const pathHTML = path.resolve(__dirname, '..', '..', '..', 'mocks', 'FlashScoreMocks', 'flashScore.html');
    const HTML = await fs.readFileSync(pathHTML, 'utf-8');

    expect(new ScrapingFlashScoreTodayGames(HTML).scrapingTodayGames()).toHaveLength(4);
  });

  it('should return an array of objects equal to expected', async () => {
    const pathHTML = path.resolve(__dirname, '..', '..', '..', 'mocks', 'FlashScoreMocks', 'flashScore.html');
    const HTML = await fs.readFileSync(pathHTML, 'utf-8');

    expect(new ScrapingFlashScoreTodayGames(mockFlashScoreTodayMatchesNotInit).scrapingTodayGames()).toEqual([
      {
        championship: 'Brasil Serie A',
        status: 'Não iniciado',
        eventTime: '20:30',
        homeTeam: {
          name: 'Sul Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/png.png',
          goals: '',
        },
        visitantTeam: {
          name: 'Norte Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/png.png',
          goals: '',
        },
      },
    ]);

    expect(new ScrapingFlashScoreTodayGames(HTML).scrapingTodayGames()).toEqual(
      Array.from({ length: 4 }).map(() => ({
        championship: 'Brasil Serie A',
        status: '60',
        eventTime: 'iniciado',
        homeTeam: {
          name: 'Sul Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/png.png',
          goals: '2',
        },
        visitantTeam: {
          name: 'Norte Brasil',
          imageUrl: 'https://www.flashscore.com.br/src/png.png',
          goals: '2',
        },
      }))
    );
  });
});
