import { StyleSheet, View } from "react-native";
import Item from "../../Item/Item";
import Stock from "../../../models/Stock";

const staticStock = new Stock(
  "토스증권",
  "토스증권 계좌",
  "원",
  "43,334,675",
  "송금"
);

const addStock = new Stock("+입출금", "증권계좌 추가하기");

function StockAdd() {
  return (
    <View>
      <View>
        <Item item={staticStock} totalStyle={styles.totalStyle} />
        <Item item={addStock} arrow={true} />
      </View>
    </View>
  );
}

export default StockAdd;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
