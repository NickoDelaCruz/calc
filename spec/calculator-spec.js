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
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Mercury()).toBeGreaterThanOrEqual(87);
  });

  it('Takes userBday and converts it into Venus Age', function() {
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Venus()).toBeGreaterThanOrEqual(33);
  });

  it('Takes userBday and converts it into Mars Age', function() {
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Mars()).toBeGreaterThanOrEqual(11);
  });

  it('Takes userBday and converts it into Jupiter Age', function() {
    let Age = new Calculator(55, "11-21-1963");
    expect(Age.age2Jupiter()).toBeGreaterThanOrEqual(4);
  });
    it('Takes userBday and adds 105 then divide by 2 for a average life expectancy on earth', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeEarth()).toBeGreaterThanOrEqual(63)
  });

  it('Calculates Earth age to Mercury age and gets life expentancy on Mercury', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeMercury()).toBeGreaterThanOrEqual(93)
  });
  
  it('Calculates Earth age to Venus age and gets life expentancy on Venus', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeVenus()).toBeGreaterThanOrEqual(69)
  });
});
