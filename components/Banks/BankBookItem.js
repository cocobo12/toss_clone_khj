import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";

function BankBookItem({ bankbook, onSelect }) {
  console.log(bankbook);
  console.log(bankbook.title);
  console.log(bankbook.name);

  let button = "";
  if (bankbook.title === "저축예금" || bankbook.title === "토스뱅크 통장") {
    button = "송금";
  } else if (bankbook.title === "토스뱅크에 쌓인 이자") {
    button = "지금 받기";
  }

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
            {bankbook.buttonOn ? (
              <SilenceButton color={Colors.brightGray}>{button}</SilenceButton>
            ) : (
              ""
            )}
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
    marginVertical: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 6,
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
    fontSize: 14,
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
    flex: 1,
    alignItems: "flex-end",
    paddingVertical: 8,
  },
});
