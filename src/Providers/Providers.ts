type TypeChampionship = 'brasileirao-a' | 'brasileirao-b' | 'brasileirao-c';

export default {
  flashScoreChampionship: (championship: TypeChampionship) => {
    if (championship === 'brasileirao-a') {
      return {
        provider: 'https://www.flashscore.com.br/futebol/brasil/serie-a/classificacao/',
        name: 'FleshScore Brasileirão A',
      };
    }
    if (championship === 'brasileirao-b') {
      return {
        provider: 'https://www.flashscore.com.br/futebol/brasil/serie-b/classificacao/',
        name: 'FleshScore Brasileirão B',
      };
    }

    return {
      provider: 'https://www.flashscore.com.br/futebol/brasil/serie-c/classificacao/',
      name: 'FleshScore Brasileirão C',
    };
  },
  flashScoreTodayMatches: (championship: TypeChampionship) => {
    if (championship === 'brasileirao-a') {
      return {
        provider: 'https://www.flashscore.com.br/futebol/brasil/serie-a',
        name: 'FleshScore Jogos Brasileirão A',
      };
    }
    if (championship === 'brasileirao-b') {
      return {
        provider: 'https://www.flashscore.com.br/futebol/brasil/serie-b',
        name: 'FleshScore Jogos Brasileirão B',
      };
    }

    return {
      provider: 'https://www.flashscore.com.br/futebol/brasil/serie-c',
      name: 'FleshScore Jogos Brasileirão C',
    };
  },
};
