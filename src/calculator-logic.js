export class Calculator {
  constructor() {
    this.birthDate;
    this.todayDate;
    this.DateInSeconds;
    this.todaysDateInSeconds;
    this.usersAge;
  }

  ToSeconds() {
    this.userDateInSeconds = ((this.birthDate.getTime())/1000);
    this.todaysDateInSeconds = ((this.todayDate.getTime())/1000);
  }
}
