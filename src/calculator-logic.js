export class Calculator {
  constructor(EarthAge){
  this.EarthAge = EarthAge;
  // this.currentDate = Date.now();

}
compare(date1, date2) {
  let past = new Date(date1);
  let pastSeconds = past.getTime() / 1000;
  let future = new Date(date2);
  let futureSeconds = future.getTime() / 1000;
  let diff = futureSeconds - pastSeconds;
  return diff;
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
    let avgEarth = this.EarthAge + 150 / 2;
    return avgEarth;
  }

  AvgLifeMercury() {
    let avgMerc = Math.floor((this.EarthAge / 0.24 + 75 / 2));
    return avgMerc;
  }

  AvgLifeVenus() {
    let avgVenus = Math.floor((this.EarthAge / 0.62 + 130 / 2));
    return avgVenus;
  }

  AvgLifeMars() {
    let avgMars = Math.floor((this.EarthAge / 1.88 + 150 / 2));
    return avgMars;
  }

  AvgLifeJupiter() {
    let avgJupiter = Math.floor((this.EarthAge / 11.86 + 150 / 2));
    return avgJupiter;
  }

}
