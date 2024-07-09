import { FlatList, Text, View } from "react-native";
import CardItem from "./CardItem";

function CardList({ cards }) {
  if (!cards || cards.length === 0) {
    return (
      <View>
        <Text>No cards added yet</Text>
      </View>
    );
  }

  function selectHandler() {}

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <CardItem card={item} index={index} onSelect={selectHandler} />
      )}
    />
  );
}

export default CardList;
