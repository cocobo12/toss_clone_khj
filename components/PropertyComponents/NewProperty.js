import { StyleSheet, View } from "react-native";

import ItemModel from "../../models/ItemModel";
import Item from "../Item/Item";

const addMyProperty = new ItemModel("파란추가", "내 자산 추가");
const newPassbook = new ItemModel("계좌만들기", "새 계좌 만들기");

function NewProperty() {
  return (
    <View>
      <View>
        <Item item={addMyProperty} arrow={true} />
        <Item item={newPassbook} arrow={true} />
      </View>
    </View>
  );
}

export default NewProperty;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
