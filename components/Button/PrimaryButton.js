import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PrimaryButton({
  children,
  color,
  textColor,
  fontSize,
  innerStyle,
  pageHandler,
}) {
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
        onPress={pageHandler ? pageHandler : pressHandler}
        android_ripple={{ color: Colors.pressedGray, borderless: false }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={innerStyle ? innerStyle : styles.innerContainer}>
          <Text
            style={[
              styles.buttonText,
              { color: textColor ? textColor : "white" },
              { fontSize: fontSize ? fontSize : 15 },
            ]}
          >
            {children}
          </Text>
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
    marginTop: 3,
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
    paddingHorizontal: 14,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
