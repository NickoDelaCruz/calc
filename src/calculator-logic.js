export class Calculator {
  constructor(userBday){
  this.userBday = userBday;

}
  age2Seconds() {
    let Age2Seconds = this.userBday * 31536000;
    return Age2Seconds;
  }

  age2Mercury() {
    let ageMerc = Math.floor((this.userBday / 0.24));
    return ageMerc;
  }



}
