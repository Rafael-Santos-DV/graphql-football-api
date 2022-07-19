import { mockFlashScoreHTML, mockFlashScoreHTMLerror } from '../../../Mocks/MockFlashScoreHtml';
import { mockFlashScoreChampionshipTableJson } from '../../../Mocks/MockFlashScoreJson';
import ScrapingFlashChampionship from './ScrapingFlashScoreChampionship';

describe('Scraping FlashScore', () => {
  it('should return an array with the amount', () => {
    expect(new ScrapingFlashChampionship(mockFlashScoreHTML).scrapingChampionshipTable().length).toBe(1);
    expect(
      new ScrapingFlashChampionship(mockFlashScoreHTML + mockFlashScoreHTML + mockFlashScoreHTML).scrapingChampionshipTable().length
    ).toBe(3);

    expect(new ScrapingFlashChampionship(mockFlashScoreHTMLerror).scrapingChampionshipTable().length).toBe(0);
  });

  it('should return an array equal to expected', () => {
    expect(new ScrapingFlashChampionship(mockFlashScoreHTML + mockFlashScoreHTML).scrapingChampionshipTable()).toEqual([
      mockFlashScoreChampionshipTableJson,
      mockFlashScoreChampionshipTableJson,
    ]);

    expect(new ScrapingFlashChampionship(mockFlashScoreHTMLerror).scrapingChampionshipTable()).toEqual([]);
  });
});
