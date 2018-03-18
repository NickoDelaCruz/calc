import { Calculator } from './../src/calculator-logic.js';
describe('Calculator', function() {
  let calculator;


  beforeEach(function() {
    calculator = new Calculator();
  });


  it('Takes users age and converts it into seconds', function() {
    let Age = new Calculator(5);
    expect(Age.age2Seconds()).toEqual(157680000)
  });

  it('Takes userBday and converts it into Mercury Age', function() {
    let Age = new Calculator(1);
    expect(Age.age2Mercury()).toBeGreaterThanOrEqual(4, 4.3);
  });

  it('Takes userBday and converts it into Venus Age', function() {
    let Age = new Calculator();
    expect(Age.NAME()).toBeGreaterThanOrEqual();
  });

});
