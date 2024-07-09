import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import BellIcon from "../../assets/icons/bell-44.svg";

function TrustElement() {
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
            <BellIcon width={24} height={24} fill="white" />
            <Text style={styles.innerText}>내 신용점수</Text>
          </View>
          <View style={styles.innerColorText}>
            <Text>dd</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default TrustElement;

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
    paddingHorizontal: 20,
  },
  iconTitle: {
    flexDirection: "row",
  },
  innerText: {
    color: Colors.buttonTextGray,
    marginLeft: 8,
  },
  innerColorText: {
    backgroundColor: "white",
    marginRight: 5,
  },
});
