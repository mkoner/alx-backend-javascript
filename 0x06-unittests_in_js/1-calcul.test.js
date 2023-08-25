var assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('Should return the sum of rounded arguments', () => {
            assert.equal(calculateNumber('SUM', 7, 3), 10);
        })

        it('Should return the sum of rounded arguments', () => {
            assert.equal(calculateNumber('SUM', 4.7, 3), 8);
        })

        it('Should return the sum of rounded arguments', () => {
            assert.equal(calculateNumber('SUM', -2.6, 3), 0);
        })
    })

    describe('SUBTRACT', () => {
        it('Should return the difference of rounded arguments', () => {
            assert.equal(calculateNumber('SUBTRACT', 7, 3), 4);
        })

        it('Should return the difference of rounded arguments', () => {
            assert.equal(calculateNumber('SUBTRACT', -2.6, 3), -6);
        })

        it('Should return the difference of rounded arguments', () => {
            assert.equal(calculateNumber('SUBTRACT', 3.9, 3), 1);
        })
    })

    describe('DIVIDE', () => {
        it('Should return the division of rounded arguments', () => {
            assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
        })

        it('Should return the division of rounded arguments', () => {
            assert.equal(calculateNumber('DIVIDE', 3.7, 2.3), 2);
        })

        it('Should return Error when divided by 0', () => {
            assert.equal(calculateNumber('DIVIDE', 9, 0.3), 'Error');
        })
    })
});