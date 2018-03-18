import { Calculator } from './../src/calculator-logic.js';
describe('Calculator', function() {
  let Character;
  beforeEach(function() {
    Character = new Calculator();
  });
  it('Takes users age and converts it into seconds', function() {
    var Age = new Calculator(5);
    expect(Age.Age2Seconds()).toEqual(157680000)
  });
});
