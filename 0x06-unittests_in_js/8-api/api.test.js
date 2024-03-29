const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
    const API_URL = 'http://localhost:7865';
    it('Should test the status code and content of body', (done) => {
        const options = {
            url: API_URL,
            method: 'GET',
        };
        request(options, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});