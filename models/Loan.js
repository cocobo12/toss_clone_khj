export default class Loan {
    constructor(name, title, subTitle, total, buttonOn, status) {
      this.name = name;
      this.title = title;
      this.subTitle = subTitle;
      this.total = total;
      this.buttonOn = buttonOn;
      this.status = status;
      this.id = new Date().toString() + Math.random().toString();
    }
  }
  