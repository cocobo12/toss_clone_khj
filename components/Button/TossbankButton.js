import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function TossbankButton({ children, color, textColor, innerStyle }) {
  const arrow = " 〉";

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
        <View style={[styles.innerContainer, innerStyle]}>
          <Text
            style={[
              styles.buttonText,
              { color: textColor ? textColor : "white" },
            ]}
          >
            {children}
          </Text>
          <Text style={styles.arrow}>{arrow}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default TossbankButton;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    elvation: 4,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 3,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 22,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  arrow: {
    color: "white",
  },
});
