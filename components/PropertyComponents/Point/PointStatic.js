import { StyleSheet, View } from "react-native";
import Item from "../../Item/Item";
import Point from "../../../models/Point";

const smileCashe = new Point("스마일캐시", "스마일캐시", "원", "5,678");
const sinPoint = new Point("신세계", "신세계포인트", "P", "2,016");

const addPoint = new Point("+입출금", "포인트 · 페이 머니 추가하기");

function PointStatic() {
  return (
    <View>
      <View>
        <Item item={smileCashe} totalStyle={styles.totalStyle} />
        <Item item={sinPoint} totalStyle={styles.totalStyle} />
        <Item item={addPoint} arrow={true} />
      </View>
    </View>
  );
}

export default PointStatic;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
