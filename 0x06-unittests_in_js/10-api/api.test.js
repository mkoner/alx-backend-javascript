const { expect } = require('chai');
const request = require('request');
const { response } = require('./api');

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

describe('The cart page', () => {
    const API_URL = 'http://localhost:7865';
    it('Should test the status code and content of body for a number', (done) => {
        const id = 78;
        const options = {
            url: `${API_URL}/cart/${id}`,
            method: 'GET',
        };
        request(options, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal(`Payment methods for cart ${id}`);
            done();
        });
    });

    it('Should test the incorrect status', (done) => {
        const id = 'hello';
        const options = {
            url: `${API_URL}/cart/${id}`,
            method: 'GET',
        };
        request(options, (err, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('/login endpoint', () => {
    const API_URL = 'http://localhost:7865';
    it('Test login endpoint', (done) => {
        const userName = 'Ali';
        const options = {
            url: `${API_URL}/login`,
            method: 'POST',
            json: {
                userName,
            },
        };
        request(options, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal(`Welcome ${userName}`);
            done();
        });
    });
});

describe('/available_payments', () => {
    const API_URL = 'http://localhost:7865';
    it('Testing available paiement', (done) => {
        const options = {
            url: `${API_URL}/available_payments`,
            method: 'GET',
        };
        request(options, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
              done();
        });
    });

});
