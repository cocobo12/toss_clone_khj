import { FlatList, Text, View } from "react-native";
import Item from "./Item";

function ItemList({ items }) {
  console.log("아이템리스트로넘어옴");
  console.log(items);
  if (!items || items.length === 0) {
    return (
      <View>
        <Text>No item added yet</Text>
      </View>
    );
  }

  function selectHandler() {}

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Item item={item} onSelect={selectHandler} />
      )}
    />
  );
}

export default ItemList;
