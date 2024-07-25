import { View, Text, StyleSheet, FlatList } from "react-native";
import InputPassbook from "./InputPassbook";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Board from "../../../../components/Board/Board";
import { fetchAllCard, insertCard } from "../../../../util/database";
import Card from "../../../../models/Card";
import InputCard from "./InputCard";

function EditCard() {
  const [loadedCards, setLoadedCards] = useState([]);
  const [cardSubmitted, setCardSubmitted] = useState(false); // 추가된 상태
  const [cardDeleted, setCardDeleted] = useState(false); // 추가된 상태

  const isFocused = useIsFocused();
  console.log("useEffect후");
  console.log(isFocused);

  // 계좌 db에 추가
  async function cardSubmit(card) {
    if (cardSubmitted) {
      return; // 이미 제출된 경우 함수 종료
    }
    console.log("계좌 서밋 데이터 : ", card);
    const cardItem = new Card(
      card.name,
      card.title,
      card.cardNumber,
      card.subTitle,
      card.total,
      card.buttonOn,
      card.image
    );

    // BankBookItem()함수 이용 x 그냥 하드코딩으로 처리

    await insertCard(cardItem);
    setCardSubmitted(true); // 제출 후 상태 변경
  }

  function reloading() {
    setCardDeleted(true);
  }

  useEffect(() => {
    async function loadCards() {
      const cards = await fetchAllCard();
      console.log("db카드 데이터--------------------------");
      console.log(cards.rows._array);
      setLoadedCards(cards.rows._array);
    }

    if (isFocused) {
      loadCards();
      setCardSubmitted(false);
      setCardDeleted(false);
    }
  }, [isFocused, cardSubmitted, cardDeleted]);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "newCard":
        return (
          <View style={styles.itemContainer}>
            <InputCard
              key={cardSubmitted ? "submitted" : "new"}
              submitHandler={cardSubmit}
            />
          </View>
        );

      case "cardList":
        return (
          <View style={styles.cardContainer}>
            <Board
              type="card"
              items={loadedCards}
              button={false}
              deleteButton={reloading}
            />
          </View>
        );
    }
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={[{ type: "newCard" }, { type: "cardList" }]}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.type + index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default EditCard;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 40,
  },
  cardContainer: {
    marginTop: 24,
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
