import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useFonts } from "expo-font";

function PrimaryButton({
  id,
  children,
  color,
  textColor,
  fontSize,
  innerStyle,
  pageHandler,
  gridItem,
  buttonText,
}) {
  console.log("버튼에 넘어온 id", id);

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) return null;

  function pressHandler() {
    console.log("Pressed!");
  }

  function outerHandler() {
    pageHandler(id ? id : "");
  }
  return (
    <View
      style={[
        gridItem ? gridItem : styles.gridItem,
        { backgroundColor: color ? color : Colors.grayComp },
      ]}
    >
      <Pressable
        onPress={pageHandler ? outerHandler : pressHandler}
        android_ripple={{ color: Colors.pressedGray, borderless: false }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={innerStyle ? innerStyle : styles.innerContainer}>
          <Text
            style={[
              buttonText ? buttonText : styles.buttonText,
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
    //fontFamily: "Pretendard",
  },
});
