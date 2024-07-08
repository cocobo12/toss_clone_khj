import { StyleSheet, View } from "react-native";
import BankBookList from "../../components/Banks/BankBookList";
import PrimaryButton from "../../components/Button/PrimaryButton";
function AllBankBooks({ bankbooks }) {
  return (
    <View style={styles.outerContainer}>
      <BankBookList bankbooks={bankbooks} />
      <PrimaryButton> 내 계좌 대출 증권 포인트 보기 </PrimaryButton>
    </View>
  );
}

export default AllBankBooks;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
