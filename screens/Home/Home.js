import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import Board from "../../components/Board/Board";
import BankBook from "../../models/BankBook";

import Card from "../../models/Card";
import MyTrust from "./MyTrust";
import RecommendedService from "./RecommendedService";
import TossbankButton from "../../components/Button/TossbankButton";

//const DUMMY_LOGO = "C:RN\toss_v2\toss_clone_khjassetsicons\bell-44.svg";
const DUMMY_BANKBOOK = [
  new BankBook("토스뱅크 통장", "토스뱅크 통장", "원", "10,000", true),
  new BankBook("토스뱅크 이자", "토스뱅크에 쌓인 이자", "원", "58", true),
  new BankBook("모임통장", "모임통장", "원", "1,146,147", false),
  new BankBook("우체국", "저축예금", "원", "50,000,000", true),
  new BankBook("토스증권", "증권 · 토스증권 계좌", "원", "0", true),
  new BankBook("기타자산", "기타 자산", "", "잔액 보기", false),
];

const DUMMY_CARD = [
  new Card("카드내역", "7월에 쓴 돈", "원", "538,238", true),
  new Card("D15", "7월 25일 낼 카드값", "원", "291,810", false),
];

function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topButton}>
          <TossbankButton>토스뱅크</TossbankButton>
        </View>
        <View style={styles.bankContainer}>
          <Board type="bankbook" items={DUMMY_BANKBOOK} />
        </View>

        <View style={styles.containerMargin}>
          <Board type="card" items={DUMMY_CARD} />
        </View>

        <View style={styles.containerMargin}>
          <MyTrust />
        </View>

        <View>
          <RecommendedService />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bankContainer: {
    marginVertical: 12,
    marginHorizontal: 5,
  },
  containerMargin: {
    marginBottom: 12,
    marginHorizontal: 5,
  },
  topButton: {
    marginHorizontal: 5,
  },
});
