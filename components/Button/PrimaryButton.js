import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PrimaryButton({ children, color }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View
      style={[
        styles.gridItem,
        { backgroundColor: color ? color : Colors.grayComp },
      ]}
    >
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.pressedGray, borderless: false }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
