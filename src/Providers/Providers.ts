export default {
  flashScoreChampionship: (country: string, championship: string) => {
    return {
      name: `classificação: ${country} - ${championship}`,
      provider: `https://www.flashscore.com.br/futebol/${country}/${championship}/classificacao/`,
    };
  },
  flashScoreTodayMatches: (country: string, championship: string) => {
    return {
      name: `matches: ${country} - ${championship}`,
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
