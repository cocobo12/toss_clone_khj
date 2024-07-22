import { StyleSheet, View } from "react-native";
import Loan from "../../../models/Loan";
import Item from "../../Item/Item";

const staticLoan = new Loan(
  "대출한도",
  "내 신용점수대 승인 가능성 94%",
  "",
  "내 대출한도 확인하기"
);

const addLoan = new Loan("+입출금", "대출계좌 추가하기");

function LoanAdd() {
  return (
    <View>
      <View>
        <Item item={staticLoan} totalStyle={styles.totalStyle} />
        <Item item={addLoan} arrow={true}/>
      </View>
    </View>
  );
}

export default LoanAdd;

const styles = StyleSheet.create({
  totalStyle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
});
