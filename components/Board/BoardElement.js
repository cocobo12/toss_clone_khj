import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import BellIcon from "../../assets/icons/bell-44.svg";

function TrustElement() {
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
            <BellIcon width={24} height={24} fill="white" />
            <Text style={styles.innerText}>내 신용점수</Text>
          </View>
          <View style={styles.innerColorText}>
            <Text style={styles.validText}>변동감지</Text>
          </View>
          <Text style={styles.arrow}>{arrow}</Text>
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
    paddingHorizontal: 14,
  },
  iconTitle: {
    flex: 1,
    flexDirection: "row",
  },
  innerText: {
    color: Colors.buttonTextGray,
    marginLeft: 8,
  },
  innerColorText: {
    backgroundColor: Colors.validButton,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  validText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "bold",
    color: "#ffb567",
  },
  arrow: {
    marginLeft: 3,
    color: Colors.brightGray,
    fontWeight: "bold",
  },
});
