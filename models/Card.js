export default class Card {
  constructor(
    name,
    title,
    cardNumber,
    subTitle,
    total,
    buttonOn,
    image,
    status
  ) {
    this.name = name;
    this.title = title;
    this.cardNumber = cardNumber;
    this.subTitle = subTitle;
    this.total = total;
    this.buttonOn = buttonOn;
    this.image = image;
    this.status = status;
    this.id = new Date().toString() + Math.random().toString();
  }
}
