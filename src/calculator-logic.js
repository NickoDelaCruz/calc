export class Calculator {
  constructor(userBday){
  this.userBday = userBday;

}
  Age2Seconds() {
    let Age2Seconds = this.userBday * 31536000;
    return Age2Seconds;
  }
}
