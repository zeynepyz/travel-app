const request = require('supertest');
const app = require('../src/server/index.js'); // Express sunucusu

describe('Express Server Test', () => {
    it('GET /test should return status code 200 and a message', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Server is running!');
    });
});
