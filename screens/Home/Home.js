import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Colors } from "../../constants/colors";
import Board from "../../components/Board/Board";
import BankBook from "../../models/BankBook";

import BellIcon from "../../assets/icons/bell-44.svg";

//const DUMMY_LOGO = "C:RN\toss_v2\toss_clone_khjassetsicons\bell-44.svg";
const DUMMY_BANKBOOK = [
  new BankBook("우체국", "저축예금", "서브타이틀", "10,000", true),
  new BankBook("신한은행", "저축예금", "0.0%", "20,000", true),
];

function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PrimaryButton>children</PrimaryButton>
        <Board type="bankbook" items={DUMMY_BANKBOOK} />
        <Text> haha </Text>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {},
});
