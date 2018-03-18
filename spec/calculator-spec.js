import { Calculator } from './../src/calculator-logic.js';
describe('Calculator', function() {
  let calculator;


  beforeEach(function() {
    calculator = new Calculator();
  });


  it('Takes users age and converts it into seconds', function() {
    let Age = new Calculator(5, "5 years");
    expect(Age.age2Seconds()).toBeCloseTo(157680000)
  });

  it('Takes userBday and converts it into Mercury Age', function() {
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Mercury()).toBeCloseTo(87);
  });

  it('Takes userBday and converts it into Venus Age', function() {
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Venus()).toBeCloseTo(33);
  });

  it('Takes userBday and converts it into Mars Age', function() {
    let Age = new Calculator(21, "11-21-1996");
    expect(Age.age2Mars()).toBeCloseTo(11);
  });

  it('Takes userBday and converts it into Jupiter Age', function() {
    let Age = new Calculator(55, "11-21-1963");
    expect(Age.age2Jupiter()).toBeCloseTo(4);
  });
    it('Takes userBday and adds 150 then divide by 2 for a average life expectancy on earth', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeEarth()).toBeLessThanOrEqual(100)
  });

  it('Calculates Earth age to Mercury age and gets life expentancy on Mercury', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeMercury()).toBeGreaterThanOrEqual(81.25)
  });

  it('Calculates Earth age to Venus age and gets life expentancy on Venus', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeVenus()).toBeGreaterThanOrEqual(80)
  });

  it('Calculates Earth age to Mars age and gets life expentancy on Mars', function() {
    var avg = new Calculator(21);
    expect(avg.AvgLifeMars()).toBeGreaterThanOrEqual(80)
  });
});
