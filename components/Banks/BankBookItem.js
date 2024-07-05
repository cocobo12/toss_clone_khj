import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import BankBook from "../../models/BankBook";
import CustomIcons from "../UI/CustomIcons";
import PrimaryButton from "../Button/PrimaryButton";

function BankBookItem({ bankbook, onSelect }) {
  console.log(bankbook);
  console.log(bankbook.title);
  console.log(bankbook.name);
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onSelect}
        android_ripple={{ color: Colors.pressedGray, borderless: false }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <CustomIcons name={bankbook.name} />
          <View>
            <Text style={styles.title}>{bankbook.title}</Text>
            <Text style={styles.total}>{bankbook.total}</Text>
          </View>
          <PrimaryButton>송금</PrimaryButton>
        </View>
      </Pressable>
    </View>
  );
}

export default BankBookItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginVertical: 3,
  },
  innerContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  title: {
    color: Colors.brightGray,
    fontSize: 12,
  },
  total: {
    color: "white",
    fontSize: 20,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
