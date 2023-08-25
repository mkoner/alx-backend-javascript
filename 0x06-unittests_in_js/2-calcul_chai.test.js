const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('Should return the sum of rounded arguments', () => {
            expect(calculateNumber('SUM', 7, 3)).to.equal(10);
        });

        it('Should return the sum of rounded arguments', () => {
            expect(calculateNumber('SUM', 4.7, 3)).to.equal(8);
        });

        it('Should return the sum of rounded arguments', () => {
            expect(calculateNumber('SUM', -2.6, 3)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('Should return the difference of rounded arguments', () => {
            expect(calculateNumber('SUBTRACT', 7, 3)).to.equal(4);
        });

        it('Should return the difference of rounded arguments', () => {
            expect(calculateNumber('SUBTRACT', -2.6, 3)).to.equal(-6);
        });

        it('Should return the difference of rounded arguments', () => {
            expect(calculateNumber('SUBTRACT', 3.9, 3)).to.equal(1);
        });
    });

    describe('DIVIDE', () => {
        it('Should return the division of rounded arguments', () => {
            expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
        });

        it('Should return the division of rounded arguments', () => {
            expect(calculateNumber('DIVIDE', 3.7, 2.3)).to.equal(2);
        });

        it('Should return Error when divided by 0', () => {
            expect(calculateNumber('DIVIDE', 9, 0.3)).to.equal('Error')
        });
    })
});
