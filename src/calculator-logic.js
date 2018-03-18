export class Calculator {
  constructor(userBday){
  this.userBday = userBday;

}
  age2Seconds() {
    let Age2Seconds = this.userBday * 31536000;
    return Age2Seconds;
  }
  mercuryAge() {
    let mercuryAge = Math.floor((this.userBday / 0.24));
    return mercuryAge;
  }
}
