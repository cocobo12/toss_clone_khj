import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

function SilenceButton({ children, color }) {
  function pressHandler() {
    console.log("noEffect!");
  }
  return (
    <View
      style={[
        styles.outerContainer,
        { backgroundColor: color ? color : Colors.grayComp },
      ]}
    >
      <Pressable onPress={pressHandler} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SilenceButton;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elvation: 4,
    borderRadius: 6,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    paddingVertical: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
