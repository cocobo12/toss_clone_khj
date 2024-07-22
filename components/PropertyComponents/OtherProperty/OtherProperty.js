import { StyleSheet, View } from "react-native";
import Item from "../../Item/Item";
import Other from "../../../models/Other";

const otherStatic = new Other("기타자산", "현금 · 엔화", "", "잔액 보기");

const addOther = new Other("+입출금", "기타자산 추가하기");

function OtherProperty() {
  return (
    <View>
      <View>
        <Item item={otherStatic} totalStyle={styles.totalStyle} />
        <Item item={addOther} arrow={true} />
      </View>
    </View>
  );
}

export default OtherProperty;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
