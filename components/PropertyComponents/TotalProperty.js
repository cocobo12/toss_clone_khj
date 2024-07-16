import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import PrimaryButton from "../Button/PrimaryButton";
import CustomIcons from "../UI/CustomIcons";

function TotalProperty() {
  const v = "⋁";
  let total = "98,226,158";
  return (
    <View>
      <View style={styles.outerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>총 자산</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={Colors.black}
              fontSize={20}
              innerStyle={styles.innerStyle}
            >
              {total}원
            </PrimaryButton>
          </View>
          <Text style={styles.totalText}>지난달보다 196만원 늘었어요</Text>
          <View>
            <PrimaryButton></PrimaryButton>
          </View>
        </View>
        <View>
          <CustomIcons name="총자산" width={100} height={100} />
        </View>
      </View>
    </View>
  );
}

export default TotalProperty;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
  },
  text: {
    color: Colors.buttonTextGray,
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 30,
    marginLeft: 15,
  },
  total: {
    color: "white",
    fontSize: 20,
  },
  totalTextContainer: {
    flexDirection: "row",
  },
  totalText: {
    color: "white",
  },
  v: {
    color: Colors.brightGray,
    fontWeight: "bold",
  },
  innerStyle: {
    paddingVertical: 6,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginLeft: -54,
  },
});
