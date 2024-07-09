import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

import BellIcon from "../../assets/icons/bell-44.svg";

function RecommendButton({
  children,
  color,
  textColor,
  innerStyle,
  secondLine,
}) {
  let second = secondLine ? secondLine : "";
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
          <View style={styles.buttonContainer}>
            <Text
              style={[
                styles.buttonText,
                { color: textColor ? textColor : "white" },
              ]}
            >
              {children}
            </Text>
            <BellIcon width={24} height={24} fill="white" />
          </View>

          <Text
            style={[
              styles.buttonText,
              { color: textColor ? textColor : "white" },
            ]}
          >
            {second}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default RecommendButton;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#404040",
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
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    color: "white",
  },
});
