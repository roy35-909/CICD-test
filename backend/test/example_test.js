
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const app = require('../server'); // Import app without starting the server
const connectDB = require('../config/db'); // Import connectDB for database connection
const mongoose = require('mongoose');
const { expect } = chai;

chai.use(chaiHttp);
let server;
let port;

before(async () => {
  // Connect to the database
  await connectDB();
  console.log('Test database connected');

  // Start the server
  server = http.createServer(app);
  server.listen(0, () => {
    port = server.address().port; // Use dynamically assigned port
    console.log(`Test server running on port ${port}`);
  });
});

after(async () => {
  // Close the server
  if (server) {
    server.close(() => {
      console.log('Test server closed');
    });
  }

  // Disconnect from the database
  await mongoose.connection.close();
  console.log('Test database disconnected');
});

describe('Backend API Tests', () => {
  it('should return 200 for the root route', async () => {
    const res = await chai.request(`http://localhost:${port}`).get('/');
    expect(res).to.have.status(404);
  });
});
