const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');



describe('tests', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('gets list of cats', async () => {
    const resp = await request(app).get('/cats');
    expect(resp.body.length).toEqual(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('get /cats/2 shows cat id stuff', async () => {
    const resp = await request(app).get('/cats/2');
    console.log(resp.body);
    expect(resp.body).toEqual({
      id:'2',
      name:'Garfield',
      type:'Orange Tabby',
      url:'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg',
      year:'1978',
      lives:'7',
      isSidekick:false
    });
  });
  afterAll(() => {
    pool.end();
  });
});
