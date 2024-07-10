import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import BellIcon from "../../assets/icons/bell-44.svg";
import CustomIcons from "../UI/CustomIcons";

function RecommendElement({ icon, content }) {
  const arrow = " 〉";
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.pressedGray, borderless: false }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.iconTitle}>
            <CustomIcons name={icon} />
            <Text style={styles.innerText}>{content}</Text>
          </View>
          <Text style={styles.arrow}>{arrow}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default RecommendElement;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    backgroundColor: Colors.grayComp,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  iconTitle: {
    flexDirection: "row",
  },
  innerText: {
    color: Colors.buttonTextGray,
    marginLeft: 2,
    marginTop: 5,
  },
  innerColorText: {
    backgroundColor: "white",
    marginRight: 5,
  },
  arrow: {
    color: Colors.buttonTextGray,
    fontWeight: "bold",
  },
});
