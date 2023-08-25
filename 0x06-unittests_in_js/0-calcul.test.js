var assert = require('assert');
const calculateNumber = require('./0-calcul');

  describe('calculateNumber',() => {
    it('Should round natural numbers', () => {
        assert.equal(calculateNumber(1, 1), 2);
    });

    it('Should round to lower number', () => {
        assert.equal(calculateNumber(1.2, 1), 2);
    });

    it('Should round to upper number', () => {
        assert.equal(calculateNumber(1.5, 1), 3);
    });

    it('Should round both arguments to lower number', () => {
        assert.equal(calculateNumber(1.2, 3.4), 4);
    });

    it('Should round both arguments to upper number', () => {
        assert.equal(calculateNumber(5.9, 3.5), 10);
    });

    it('Should round negative arguments to lower number', () => {
        assert.equal(calculateNumber(-1.6, 3.4), 1);
    });

    it('Should round negative arguments to upper number', () => {
        assert.equal(calculateNumber(-4.5, 3.9), 0);
    });
    
  });