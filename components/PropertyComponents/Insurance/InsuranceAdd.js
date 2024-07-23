import { StyleSheet, View } from "react-native";
import Item from "../../Item/Item";
import Insurance from "../../../models/Insurance";

const addInsurance = new Insurance("+입출금", "보험 추가하기");

function InsuranceAdd() {
  return (
    <View>
      <View>
        <Item item={addInsurance} arrow={true} />
      </View>
    </View>
  );
}

export default InsuranceAdd;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
