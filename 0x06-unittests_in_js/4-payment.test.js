const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should make sure that sendPaymentRequestToApi uses Utils.calculateNumber', () => {
        const utilStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(utilStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(utilStub.calledOnce).to.be.true;
        expect(utilStub.alwaysReturned(10)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
        utilStub.restore();
        consoleSpy.restore();
    });
}); 
