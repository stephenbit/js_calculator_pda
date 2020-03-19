var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add 1 and 4 to equal 5', function() {
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(5, calculator.runningTotal )
  });

  it('can subtract 4 from 7 and get 3', function() {
  calculator.numberClick(7)
  calculator.operatorClick("-")
  calculator.numberClick(4)
  calculator.operatorClick("=")
  assert.equal(3, calculator.runningTotal)
  });


  it('can multiply 3 by 5 and get 15', function() {
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("=")
    assert.equal(15, calculator.runningTotal)
  });

  it('can divide 21 by 7 and get 3', function() {
    calculator.numberClick(21)
    calculator.operatorClick("/")
    calculator.numberClick(7)
    calculator.operatorClick("=")
    assert.equal(3, calculator.runningTotal)
  });

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(2)
    calculator.numberClick(7)
    assert.equal(27, calculator.runningTotal)
  });

  it('can chain multiple operations together', function() {
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(9, calculator.runningTotal)
  });

  it('can clear the running total without affecting the calculation', function() {
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(3, calculator.runningTotal)
  });








});
