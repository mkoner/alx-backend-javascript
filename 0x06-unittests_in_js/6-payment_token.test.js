const { expect } = require('chai');
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('Should test getPaymentTokenFromAPI async', (done) => {
        getPaymentTokenFromAPI(true)
        .then(result => {
            expect(result).to.deep.equal({data: 'Successful response from the API'});
            done();
        });
    });
});