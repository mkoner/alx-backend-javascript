const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should make sure that sendPaymentRequestToApi uses Utils.calculateNumber', () => {
        const utilSpy = sinon.spy(Utils);
        sendPaymentRequestToApi(100, 20);
        //utilSpy.calculateNumber('SUM', 100, 20)
        expect(utilSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(utilSpy.calculateNumber.callCount).to.equal(1);
        utilSpy.calculateNumber.restore();
    });
}); 
