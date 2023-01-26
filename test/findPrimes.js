const findPrimes = require('../lib/findPrimes')
var expect = require('chai').expect;

const primes100 = [ 2,  3,  5,  7,
    11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97 ];

describe('findPrimes()', function() {

  context('max 100', function() {
    it('should return 25 primes', function() {
      expect(findPrimes(100).length).to.equal(25)
    })
    it('should return the correct primes', function() {
        expect(findPrimes(100)).to.eql(primes100)
      })
  })
  
})