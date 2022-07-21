import Request from 'supertest';
import { LastMatchesType } from '../../Types/TypeLastMatches';

jest.setTimeout(80000);

const mockQueryLastMatches = (id: string, limit?: number) => `{
  lastMatches(id: "${id}", ${limit ? `limit: ${limit}` : ''}) {
    championship
    eventTime
    homeTeam {
      goals
      imageUrl
      name
    }
    visitantTeam {
      goals
      imageUrl
      name
    }
  }
}`;

describe('Query lastMatches', () => {
  it('should return a match', (done) => {
    Request('http://localhost:4000')
      .post('/')
      .send({
        query: mockQueryLastMatches('/equipe/real-madrid/W8mj7MDD/'),
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) done(err);

        const data = res.body.data.lastMatches as LastMatchesType[];

        expect(data).toHaveLength(1);

        return done();
      });
  });

  // it();
});
