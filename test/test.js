'use strict';
const app = require('../app');
const request = require('supertest')(app);
const should = require('should');
const axios = require('axios');
const sinon = require('sinon');

describe('API', function() {
  describe('GET /animal-pick', function() {
    let sandbox = sinon.createSandbox()

    it('should return the value returned by external service', function(done) {
      const successResponse = {data: {option: 'cat'}};
      const resolved = new Promise((r) => r(successResponse));
      sandbox.stub(axios, 'post').returns(resolved);
      request
        .get('/animal-pick')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function(err, res) {
          if (err) throw err;
          res.body.should.have.property('option').which.is.a.String();
          res.body.option.should.equal('cat');
          done();
        });
    });
  });
});
