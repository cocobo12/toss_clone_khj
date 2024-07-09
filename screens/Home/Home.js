import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import Board from "../../components/Board/Board";
import BankBook from "../../models/BankBook";


import Card from "../../models/Card";
import MyTrust from "./MyTrust";
import RecommendedService from "./RecommendedService";

//const DUMMY_LOGO = "C:RN\toss_v2\toss_clone_khjassetsicons\bell-44.svg";
const DUMMY_BANKBOOK = [
  new BankBook("우체국", "저축예금", "원", "10,000", true),
  new BankBook("신한은행", "저축예금", "0.0%", "20,000", true),
  new BankBook("모임", "토스뱅크에 쌓인 이자", "원", "35", true),
  new BankBook("증권", "토스뱅크에 쌓인 이자", "원", "30", true),
  new BankBook("외화", "토스뱅크에 쌓인 이자", "원", "0", true),
  new BankBook("토스", "토스뱅크에 쌓인 이자", "원", "3,830", true),
  new BankBook("토스", "토스뱅크에 쌓인 이자", "원", "100", true),
  new BankBook("토스", "토스뱅크에 쌓인 이자", "원", "1", true),
];

const DUMMY_CARD = [
  new Card("신한카드", "7월에 쓴 돈", "원", "20,000", true),
  new Card("국민카드", "7월에 쓴 돈", "원", "10,000", true),
];

function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topButton}>
          <PrimaryButton>children</PrimaryButton>
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
          <RecommendedService/>
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
