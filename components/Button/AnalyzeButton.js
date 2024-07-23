import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { Colors } from "../../constants/colors";
import React, { useRef } from "react";

function AnalyzeButton({ children }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  function pressHandler() {
    console.log("Pressed!");
  }

  function pressInHandler() {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  }

  function pressOutHandler() {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPressIn={pressInHandler}
        onPressOut={pressOutHandler}
        onPress={pressHandler}
        android_ripple={{
          color: Colors.pressedGray,
          borderless: false,
          borderRadius: 30,
        }}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.buttonPressed,
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.analyzeButton,
    //borderWidth: 0,
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
    color: Colors.rowWhite,
    textAlign: "center",
  },
});
