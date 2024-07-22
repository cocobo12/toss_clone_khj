import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useFonts } from "expo-font";


function CommonButton({
  children,
  color,
  textColor,
  fontSize,
  innerStyle,
  pageHandler,
  gridItem,
  buttonText,
}) {

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) return null;

  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View
      style={[
        gridItem ? gridItem : styles.gridItem,
        { backgroundColor: color ? color : Colors.collectButton},
      ]}
    >
      <Pressable
        onPress={pageHandler ? pageHandler : pressHandler}
        
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={innerStyle ? innerStyle : styles.innerContainer}>
          <Text
            style={[
              buttonText ? buttonText : styles.buttonText,
              { color: textColor ? textColor : "#006cff" },
              { fontSize: fontSize ? fontSize : 14 },
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CommonButton;

const styles = StyleSheet.create({
  gridItem: {
    
    elvation: 4,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 3,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    marginLeft: -0.5,
    marginRight: -0.5,
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    //fontWeight: "bold",
    //fontFamily: "Pretendard",
  },
});
