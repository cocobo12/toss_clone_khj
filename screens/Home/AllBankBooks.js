import { StyleSheet, Text, View } from "react-native";
import BankBookList from "../../components/Banks/BankBookList";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function AllBankBooks({ bankbooks, button, deleteButton }) {
  const navigation = useNavigation();

  const arrow = " 〉";

  function pageHandler() {
    console.log("올뱅크북 핸들러");

    navigation.navigate("MyPropertyPage");
  }

  return (
    <View style={styles.outerContainer}>
      <BankBookList bankbooks={bankbooks} deleteButton={deleteButton}/>
      {button === false ? (
        <View>
          <Text></Text>
        </View>
      ) : (
        <View style={styles.line}>
          <PrimaryButton
            textColor={Colors.buttonTextGray}
            innerStyle={styles.innerStyle}
            pageHandler={pageHandler}
          >
            내 계좌 · 대출 · 증권 · 포인트 보기 {arrow}
          </PrimaryButton>
        </View>
      )}
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
    marginTop: 2, // 선과 버튼 사이의 간격
  },
  innerStyle: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 14,
    //paddingHorizontal: 14,
  },
});
