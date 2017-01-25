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

  it('calculator add', function(){
    calculator.previousTotal = 3;
    calculator.add(3);
    assert.equal(6, calculator.runningTotal)
  })

  it('calculator subtract', function(){
    calculator.previousTotal = 6;
    calculator.subtract(3);
    assert.equal(3, calculator.runningTotal)
  })

  it('calculator multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(3);
    assert.equal(9, calculator.runningTotal)
  })

  it('calculator divide', function(){
    calculator.previousTotal = 9;
    calculator.divide(3);
    assert.equal(3, calculator.runningTotal)
  })

  it('calculator numberClick', function(){
    calculator.previousTotal = 9;
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal)
  })

  it('calculator numberClick', function(){
    calculator.previousTotal = 9;
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal)
  })

  it('calculator operatorClick +', function(){
    calculator.previousTotal = 9;
    calculator.previousOperator = '+';
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    assert.equal(10, calculator.runningTotal)
  })

  it('calculator operatorClick -', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '-';
    calculator.runningTotal = 1;
    calculator.operatorClick("-");
    assert.equal(9, calculator.runningTotal)
  })

  it('calculator operatorClick *', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '*';
    calculator.runningTotal = 10;
    calculator.operatorClick("*");
    assert.equal(100, calculator.runningTotal)
  })

  it('calculator operatorClick /', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '/';
    calculator.runningTotal = 10;
    calculator.operatorClick("/");
    assert.equal(1, calculator.runningTotal)
  })

  it('calculator operatorClick =', function(){
    calculator.previousOperator = '/';
    calculator.operatorClick("=");
    assert.equal(null, calculator.previousOperator)
  })

  it('calculator clearClick', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 100;
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator)
    assert.equal(null, calculator.previousTotal)
  })

  it('multiply 3x5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.previousOperator = '*';
    calculator.runningTotal = 5;
    calculator.operatorClick("*");
    assert.equal(15, calculator.runningTotal)
  })

  it('divide 21/7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.previousOperator = '/';
    calculator.runningTotal = 7;
    calculator.operatorClick("/");
    assert.equal(3, calculator.runningTotal)
  })

  it('add 1+4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.previousOperator = '+';
    calculator.runningTotal = 4;
    calculator.operatorClick("+");
    assert.equal(5, calculator.runningTotal)
  })  

  it('subtract 7-4 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.previousOperator = '-';
    calculator.runningTotal = 4;
    calculator.operatorClick("-");
    assert.equal(3, calculator.runningTotal)
  })

  it('concatenate multiple number button clicks', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '+';
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    assert.equal(12, calculator.runningTotal)
  })


  
  it('chain multiple operations together', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '+';
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    assert.equal(44, calculator.runningTotal)
  })

  
  it('clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 10;
    calculator.previousOperator = '+';
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    calculator.clearClick();
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    assert.equal(22, calculator.runningTotal)
  })
});
