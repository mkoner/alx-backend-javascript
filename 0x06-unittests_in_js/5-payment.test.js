const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI Hooks', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        consoleSpy.restore();
    });
    describe('sendPaymentRequestToAPI 100, 20', () => {
        it('Test endPaymentRequestToAPI 100, 20', () => {
            sendPaymentRequestToApi(100, 20);
            expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
            expect(consoleSpy.calledOnce).to.be.true;
        });
    });
    describe('sendPaymentRequestToAPI 10, 10', () => {
        it('Test endPaymentRequestToAPI 10, 10', () => {
            sendPaymentRequestToApi(10, 10);
            expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
            expect(consoleSpy.calledOnce).to.be.true;
        });
    });
});