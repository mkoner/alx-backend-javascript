const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should make sure that sendPaymentRequestToApi uses Utils.calculateNumber', () => {
        const utilSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        //utilSpy.calculateNumber('SUM', 100, 20)
        expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
        expect(utilSpy.calledOnce).to.be.true;
        utilSpy.restore();
    });
}); 
