import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import NoEffectButton from "../Button/noEffectButton";

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
          <View style={styles.iconTitleContainer}>
            <CustomIcons name={bankbook.name} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{bankbook.title}</Text>
              <Text style={styles.total}>{bankbook.total}</Text>
            </View>
          </View>
          <View style={styles.noEffect}>
            <NoEffectButton color={Colors.brightGray}>hi</NoEffectButton>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default BankBookItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginVertical: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: 5,
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
  noEffect: {
    alignItems: "flex-end",
    paddingVertical: 10
  },
});
