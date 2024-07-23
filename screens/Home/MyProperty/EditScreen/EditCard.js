import { View, Text, StyleSheet, FlatList } from "react-native";
import InputCard from "./InputCard";

function EditCard() {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "newCard":
        return (
          <View>
            <InputCard />
          </View>
        );

      case "cardList":
        return <View></View>;
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
});
