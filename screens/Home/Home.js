import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import Board from "../../components/Board/Board";
import BankBook from "../../models/BankBook";

import Card from "../../models/Card";
import MyTrust from "./MyTrust";
import RecommendedService from "./RecommendedService";
import TossbankButton from "../../components/Button/TossbankButton";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPassbook } from "../../util/database";

//import { BANKBOOK, CARD } from "../../data/dummy-data";

//const DUMMY_LOGO = "C:RN\toss_v2\toss_clone_khjassetsicons\bell-44.svg";

const DUMMY_CARD = [
  new Card("카드내역", "7월에 쓴 돈", "원", "538,238", true),
  new Card("D15", "7월 25일 낼 카드값", "원", "291,810", false),
];

function Home() {
  const [loadedPassbooks, setLoadedPassbooks] = useState([]);

  const isFocused = useIsFocused();
  console.log("홈 화면");
  console.log(isFocused);
  console.log("useEffect전");

  useEffect(() => {
    async function loadPassbooks() {
      const passbooks = await fetchPassbook();
      console.log("db통장데이터");
      console.log(passbooks);
      setLoadedPassbooks(passbooks);
    }

    if (isFocused) {
      console.log("이펙트함수동작전");
      loadPassbooks();
      //setLoadedPassbooks((curPassbooks) => [...curPassbooks, ])
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topButton}>
          <TossbankButton>토스뱅크</TossbankButton>
        </View>
        <View style={styles.bankContainer}>
          <Board type="bankbook" items={loadedPassbooks} />
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
    marginRight: -3,
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
