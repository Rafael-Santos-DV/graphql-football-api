import Request from 'supertest';
import { TypeTodayGame } from '../../Types/TypeTodayGames';

const mockQueryTodayMatches = (limit?: number) => `{
  todayMatches(championship: "serie-a", country: "brasil"${limit ? `,limit: ${limit}` : ''}) {
    championship
    eventTime
    status
    homeTeam {
      name
      goals
      imageUrl
    }
    visitantTeam {
      name
      goals
      imageUrl
    }
  }
}`;

describe('Query TodayMatches', () => {
  it('should return an array with 4 objects equal to expected', (done) => {
    // console.log(result);
    Request('http://localhost:4000')
      .post('/')
      .send({
        query: mockQueryTodayMatches(),
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) done(err);

        const data = res.body.data.todayMatches as TypeTodayGame[];

        expect(data).toEqual(
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

        return done();
      });
  });

  it('should return a array with 1 object and your properties', (done) => {
    Request('http://localhost:4000')
      .post('/')
      .send({
        query: mockQueryTodayMatches(1),
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) done(err);
        const data = res.body.data.todayMatches as TypeTodayGame[];

        expect(data).toHaveLength(1);

        expect(data[0]).toHaveProperty('championship');
        expect(data[0]).toHaveProperty('status');
        expect(data[0]).toHaveProperty('eventTime');
        expect(data[0]).toHaveProperty('homeTeam');
        expect(data[0]).toHaveProperty('visitantTeam');

        return done();
      });
  });
});
