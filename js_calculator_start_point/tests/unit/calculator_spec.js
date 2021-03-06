var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add numbers together', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('it should be able to subtract two numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should be able to multiply numbers together', function(){
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.equal(15, calculator.runningTotal)
  })

  it('it should be able to divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should return NaN in certain functions', function(){
    calculator.previousTotal = 21
    calculator.divide(0)
    assert.equal('NaN', calculator.runningTotal)
  })


});
