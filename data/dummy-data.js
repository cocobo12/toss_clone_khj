import BankBook from "../models/BankBook";
import Card from "../models/Card";
import { Status } from "../models/enum/Status";
import {
  fetchAllCard,
  fetchAllPassbook,
  insertCard,
  insertPassbook,
} from "../util/database";

export const BANKBOOK = [
  new BankBook("토스뱅크 통장", "토스뱅크 통장", "원", "238,001", "송금"),
  new BankBook(
    "토스뱅크 이자",
    "토스뱅크에 쌓인 이자",
    "원",
    "58",
    "지금 받기"
  ),
  new BankBook("국민은행", "KB★Story통장", "원", "2,312,177", "송금"),
  new BankBook("모임통장", "모임통장", "원", "1,146,147"),
  new BankBook("기타자산", "기타 자산", "", "잔액 보기"),
  new BankBook("농협", "자유저축예탁금", "원", "252", "송금", "", "HIDE"),
  new BankBook(
    "농협",
    "NH주거래우대통장(비대면실명확인)",
    "원",
    "960",
    "송금",
    "",
    Status.HIDE
  ),
  new BankBook(
    "토스증권",
    "증권 · 토스증권 계좌",
    "원",
    "43,334,675",
    "송금",
    "",
    Status.HIDE
  ),
  new BankBook(
    "우체국",
    "저축예금",
    "원",
    "50,000,000",
    "송금",
    "",
    Status.HIDE
  ),
];

const month = () => {
  const now = new Date();
  const month = now.getMonth() + 1;

  return month;
};

export const CARD = [
  new Card("카드내역", `${month()}월에 쓴 돈`, "", "원", "538,238"),
  new Card("D15", `${month()}월 25일 낼 카드값`, "", "원", "291,810"),
];

export default async function initializeData() {
  const passbooks = await fetchAllPassbook();
  const cards = await fetchAllCard();
  console.log("초기화---------------------------------------");
  console.log("초기화---------------------------------------");
  console.log("초기화---------------------------------------");
  console.log(passbooks);
  console.log(cards);

  if (passbooks.rows.length === 0) {
    for (let i = 0; i < BANKBOOK.length; i++) {
      console.log(BANKBOOK[i]);
      await insertPassbook(BANKBOOK[i]);
    }
  }

  if (cards.rows.length === 0) {
    for (let i = 0; i < CARD.length; i++) {
      console.log("카드 초기 데이터 삽입 : ", CARD[i]);
      await insertCard(CARD[i]);
    }
  }
}
