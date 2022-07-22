import path from 'path';

export default {
  flashScoreChampionship: (country: string, championship: string) => {
    return {
      name: `classificação: ${country} - ${championship}`,
      provider: `https://www.flashscore.com.br/futebol/${country}/${championship}/classificacao/`,
    };
  },
  flashScoreProviderTest: (country: string, championship: string) => {
    return {
      name: `classificação-test: ${country} - ${championship}`,
      provider: path.resolve(__dirname, '..', 'Mocks', 'FlashScoreMocks', 'flashScore.html'),
    };
  },
  flashScoreTodayMatches: (country: string, championship: string) => {
    return {
      name: `today-Matches: ${country} - ${championship}`,
      provider: `https://www.flashscore.com.br/futebol/${country}/${championship}/`,
    };
  },
  flashScoreLastMatches: (id: string) => {
    return {
      name: `last-matches: ${id}`,
      provider: `https://www.flashscore.com.br${id}`,
    };
  },
};
