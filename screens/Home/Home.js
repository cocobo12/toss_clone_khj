import { View, StyleSheet, FlatList } from "react-native";

import Board from "../../components/Board/Board";

import Card from "../../models/Card";
import MyTrust from "./MyTrust";
import RecommendedService from "./RecommendedService";
import TossbankButton from "../../components/Button/TossbankButton";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchCards, fetchPassbook } from "../../util/database";

//import { BANKBOOK, CARD } from "../../data/dummy-data";

//const DUMMY_LOGO = "C:RN\toss_v2\toss_clone_khjassetsicons\bell-44.svg";

function Home() {
  const [loadedPassbooks, setLoadedPassbooks] = useState([]);
  const [loadedCards, setLoadedCards] = useState([]);

  const isFocused = useIsFocused();
  console.log("useEffect후");
  console.log(isFocused);

  useEffect(() => {
    async function loadPassbooks() {
      const passbooks = await fetchPassbook();
      console.log("db통장 데이터--------------------------");
      console.log(passbooks.rows._array);
      setLoadedPassbooks(passbooks.rows._array);
    }
    async function loadCards() {
      const cards = await fetchCards();
      console.log("db카드 데이터--------------------------");
      console.log(cards.rows._array);
      setLoadedCards(cards.rows._array);
    }

    if (isFocused) {
      console.log("홈 loadPassbooks");
      loadPassbooks();
      loadCards();
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "bankbook":
        return (
          <View style={styles.bankContainer}>
            <Board type="bankbook" items={loadedPassbooks} />
          </View>
        );
      case "card":
        return (
          <View style={styles.containerMargin}>
            <Board type="card" items={loadedCards} />
          </View>
        );
      case "myTrust":
        return (
          <View style={styles.containerMargin}>
            <MyTrust />
          </View>
        );
      case "recommendedService":
        return (
          <View style={styles.containerMargin}>
            <RecommendedService />
          </View>
        );
      default:
        return null;
    }
  };

  const data = [
    { type: "bankbook" },
    { type: "card" },
    { type: "myTrust" },
    { type: "recommendedService" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
        ListHeaderComponent={
          <View style={styles.topButton}>
            <TossbankButton>토스뱅크</TossbankButton>
          </View>
        }
      />
    </View>
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
    marginHorizontal: 12,
  },
  containerMargin: {
    marginBottom: 12,
    marginHorizontal: 12,
  },
  topButton: {
    marginHorizontal: 10,
  },
});
