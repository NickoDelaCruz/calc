export class Calculator {
  constructor(userBday){
  this.userBday = userBday;

}
  Age2Seconds() {
    let ageSecs = this.userBday * 31536000;
    return ageSecs;
  }

}
