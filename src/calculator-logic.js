export class Calculator {
  constructor(EarthAge){
  this.EarthAge = EarthAge;
}
  age2Seconds() {
    let Age2Seconds = this.EarthAge * 31536000;
    return Age2Seconds;
  }
  age2Mercury() {
    let ageMerc = Math.floor((this.EarthAge / 0.24));
    return ageMerc;
  }
  age2Venus() {
    let ageVenus = Math.floor((this.EarthAge / 0.62));
    return ageVenus;
  }
  age2Mars() {
    let ageMars = Math.floor((this.EarthAge / 1.88));
    return ageMars;
  }
  age2Jupiter() {
    let ageJupiter = Math.floor((this.EarthAge / 11.86));
    return ageJupiter;
  }
  AvgLifeEarth() {
    let avgEarth = 105 + this.EarthAge / 2;
    return avgEarth;
  }

  AvgLifeMercury() {
    let avgMerc = this.EarthAge / 0.24 + 100 / 2;
    return avgMerc;
  }


}
