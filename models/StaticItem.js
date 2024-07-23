export default class StaticItem {
  constructor(name, title, subTitle, total, buttonOn) {
    this.name = name;
    this.title = title;
    this.subTitle = subTitle;
    this.total = total;
    this.buttonOn = buttonOn;
    this.id = new Date().toString() + Math.random().toString();
  }
}
