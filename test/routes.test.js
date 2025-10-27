const request = require('supertest');
const express = require('express');
const routes = require('../src/routes');

// Create an instance of the app for testing
const app = express();
app.use('/', routes);

describe('Counter API Functional Tests', () => {
  // Before each test, reset the counter to ensure a clean state
  beforeEach(async () => {
    await request(app).get('/counter-reset');
  });

  it('should start with a count of 0', async () => {
    const res = await request(app).get('/counter-read');
    if (res.status !== 200) throw new Error(`Expected status 200 but got ${res.status}`);
    if (res.body.count !== 0) throw new Error(`Expected count 0 but got ${res.body.count}`);
  });

  it('should increase the counter by 1', async () => {
    // First, increase the counter
    await request(app).get('/counter-increase');

    // Then, read it to verify it's 1
    const res = await request(app).get('/counter-read');
    if (res.body.count !== 1) throw new Error(`Expected count 1 but got ${res.body.count}`);
  });

  it('should reset the counter back to 0', async () => {
    // Increase it a few times first
    await request(app).get('/counter-increase');
    await request(app).get('/counter-increase');

    // Now, reset it
    await request(app).get('/counter-reset');

    // Finally, read it to verify it's 0
    const res = await request(app).get('/counter-read');
    if (res.body.count !== 0) throw new Error(`Expected count 0 but got ${res.body.count}`);
  });
});