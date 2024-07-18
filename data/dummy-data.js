import BankBook from "../models/BankBook";
import Card from "../models/Card";

export const BANKBOOK = [
  new BankBook("토스뱅크 통장", "토스뱅크 통장", "원", "10,000", true),
  new BankBook("토스뱅크 이자", "토스뱅크에 쌓인 이자", "원", "58", true),
  new BankBook("모임통장", "모임통장", "원", "1,146,147", false),
  new BankBook("우체국", "저축예금", "원", "50,000,000", true),
  new BankBook("토스증권", "증권 · 토스증권 계좌", "원", "0", true),
  new BankBook("기타자산", "기타 자산", "", "잔액 보기", false),
];

export const CARD = [
  new Card("카드내역", "7월에 쓴 돈", "원", "538,238", true),
  new Card("D15", "7월 25일 낼 카드값", "원", "291,810", false),
];
