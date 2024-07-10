import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

import BellIcon from "../../assets/icons/bell-44.svg";
import CustomIcons from "../UI/CustomIcons";

function RecommendButton({
  children,
  color,
  textColor,
  innerStyle,
  secondLine,
  icon,
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
        <View style={styles.outerContainer}>
          <View style={[styles.innerContainer, innerStyle]}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.buttonText,
                  { color: textColor ? textColor : "white" },
                ]}
              >
                {children}
              </Text>
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
          
          <View style={styles.icon}>
            <CustomIcons name={icon} />
          </View>
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
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    color: "white",
  },
  icon: {
    marginTop: 8,
  },
});
