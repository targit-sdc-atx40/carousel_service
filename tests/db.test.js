const request = require('supertest');
const app = require('../server/server.js');

describe('Server routes should provide a response', () => {
  it('Should provide a response at /', done => {
    request(app).get('/')
      .then(res => {
        expect(res.statusCode).toBeDefined();
        done();
      })
  });

  it('Should provide a response at /related-products', done => {
    request(app).get('/related-products')
      .then(res => {
        expect(res.statusCode).toBeDefined();
        done();
      })
  });

  it('Should provide a response at /api/products/id', done => {
    request(app).get('/api/products/id')
      .then(res => {
        expect(res.statusCode).toBeDefined();
        done();
      })
  });
});


describe('Routes should provide an appropriate status code on response', () => {
  it('Should error at non existant route', done => {
    request(app).get('/api/not/a/route')
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      })
  });

  it('Should error if no query parameter is provided', done => {
    request(app).get('/api/products/id')
      .then(res => {
        expect(res.statusCode).toBe(400);
        done();
      })
  });

  it('Should error if formatted correctly but nothing is found', done => {
    request(app).get('/api/products/id?id=11111111')
      .then(res => {
        expect(res.statusCode).toBe(204);
        done();
      })
  });
});


describe('Returns from routes should be correctly formated', () => {
  it('Should have 100 items', done => {
    request(app).get('/related-products')
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(100);
        done();
      })
  });
  
  it('Should have correctly formated items', done => {
    request(app).get('/related-products')
      .then(res => {
        for (let obj of res.body) {
          expect(obj._id).toBeDefined();
          expect(obj.title).toBeDefined();
          expect(obj.price).toBeDefined();
          expect(obj.photo_url).toBeDefined();
        }
        done();
      })
  });

  it('Should return an array', done => {
    request(app).get('/api/products/id?id=1')
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
        done();
      })
  });

  it('Should have a correctly formated item', done => {
    request(app).get('/api/products/id?id=100')
      .then(res => {
        expect(res.body[0]._id).toBeDefined();
        expect(res.body[0].title).toBeDefined();
        expect(res.body[0].price).toBeDefined();
        expect(res.body[0].photo_url).toBeDefined();
        done();
      })
  });

  it('Should return a product with id that matches request', done => {
    const testId = 1;
    request(app).get('/api/products/id?id=' + testId)
      .then(res => {
        expect(res.body[0]._id).toBe(testId);
        done();
      })
  });
});