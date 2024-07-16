import { StyleSheet, View } from "react-native";
import BankBookList from "../../components/Banks/BankBookList";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function AllBankBooks({ bankbooks }) {
  const navigation = useNavigation();

  const arrow = " 〉";

  function pageHandler() {
    console.log("navi");
    navigation.navigate("MyPropertyPage");
  }

  return (
    <View style={styles.outerContainer}>
      <BankBookList bankbooks={bankbooks} />
      <View style={styles.line}>
        <PrimaryButton
          textColor={Colors.buttonTextGray}
          pageHandler={pageHandler}
        >
          내 계좌 · 대출 · 증권 · 포인트 보기 {arrow}
        </PrimaryButton>
      </View>
    </View>
  );
}

export default AllBankBooks;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  line: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginHorizontal: 10,
    marginTop: 2, // 선과 버튼 사이의 간격
  },
});
