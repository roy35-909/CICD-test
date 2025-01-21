
const chai = require('chai');
var server = require('../server.js');

const chaiHttp = require('chai-http');  // CommonJS for chai-http

chai.use(chaiHttp);  // Use chai-http for chai

const { expect } = chai;

describe('Backend API Tests', () => {
  it('should return 200 for the root route', async () => {
    const res = await chai.request(server).get('/');
    expect(res).to.have.status(404);
  });
});
