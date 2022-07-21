import Request from 'supertest';
import { ChampionshipType } from '../../Types/TypeChampionship';

const mockQueryChampionshipTable = (limit?: number) => `{
  championshipTable(championship: "serie-a", country: "brasil" ${limit ? `,limit: ${limit}` : ''}) {
    name
    draws
    position
    goalsDifference
    goalsScored
    goalsTaken
    imageUrl
    loss
    matches
    points
    winners
  }
}`;

describe('Query championshipTable', () => {
  it('should return a array of object with 4 team', (done) => {
    Request('http://localhost:4000')
      .post('/')
      .send({
        query: mockQueryChampionshipTable(),
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) done(err);
        const data = res.body.data.championshipTable as ChampionshipType[];

        expect(data).toHaveLength(4);

        data.forEach((team) => {
          expect(team).toHaveProperty('name');
          expect(team).toHaveProperty('draws');
          expect(team).toHaveProperty('position');
          expect(team).toHaveProperty('goalsDifference');
          expect(team).toHaveProperty('goalsScored');
          expect(team).toHaveProperty('goalsTaken');
          expect(team).toHaveProperty('imageUrl');
          expect(team).toHaveProperty('loss');
          expect(team).toHaveProperty('matches');
          expect(team).toHaveProperty('points');
          expect(team).toHaveProperty('winners');
        });

        return done();
      });
  });
});
