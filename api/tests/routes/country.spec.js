/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { getCountries } = require('../../src/Controllers/getCountries.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id: 'ARG'
};

const contries = getCountries();

describe('Country routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.bulkCreate(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200),
    );
  });
  describe('GET /All Activities', () => {
    it('should get 200', () =>
      agent.get('/activity/all').expect(200),
    );
  });
  
  describe('GET / Countries for Query', () => {
    it('Respons 200', () => 
    agent
    .get('/countries?name=Italy')
    .then((res) => {
      res.query
        }))
    expect(200);

    it('Respons 200', () => 
    agent
    .get('/countries?name=Peru')
    .then((res) => {
      res.query
        }))
    expect(200);
    
    it('Respons 404', () => 
    agent.get('/countries?name=1')
    .then((res) => {
      res.query
        }))
    expect(404);
  });
  describe('GET / Countries for Id', () => {
    it('Respons 200', () => 
    agent
    .get(`/countries/COL`)
    .then((res) => {
      res.query
        }))
    expect(200);
    
    it('Respons 404', () => 
    agent.get(`/countries/125`)
    .then((res) => {
      res.query
        }))
    expect(404);
  });
});
