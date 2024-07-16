import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function AnalyzeButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{
          color: Colors.pressedGray,
          borderless: false,
        }}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed ? styles.buttonPressed : null,
          },
          { backgroundColor: Colors.noEffectGray },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default AnalyzeButton;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    marginLeft: 0,
    width: "68%",
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingBottom: 6,
    paddingTop: 2,
    paddingLeft: 7,
    width: "100%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    color: "white",
    textAlign: "center",
  },
});
