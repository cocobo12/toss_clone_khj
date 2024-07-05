import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

function NoEffectButton({ children, color }) {
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

export default NoEffectButton;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elvation: 4,
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
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
