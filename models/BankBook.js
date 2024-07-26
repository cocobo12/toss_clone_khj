export default class BankBook {
  constructor(name, title, subTitle, total, buttonOn, image, status) {
    this.name = name;
    this.title = title;
    this.subTitle = subTitle;
    this.total = total;
    this.buttonOn = buttonOn;
    this.image = image;
    this.status = status;
    this.id = new Date().toString() + Math.random().toString();
  }
}
