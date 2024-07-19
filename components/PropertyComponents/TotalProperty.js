import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import PrimaryButton from "../Button/PrimaryButton";
import CustomIcons from "../UI/CustomIcons";
import AnalyzeButton from "../Button/AnalyzeButton";

function TotalProperty() {
  const v = "v";
  let total = "98,226,158";
  return (
    <View>
      <View style={styles.outerContainer}>
        <View style={styles.textButtonContainer}>
          <Text style={styles.text}>총 자산</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={Colors.grayblack}
              fontSize={20}
              innerStyle={styles.innerStyle}
              buttonText={styles.buttonText}
            >
              {total}원<Text> </Text>
              <View>
                <CustomIcons name="v" width={14} height={14} />
              </View>
            </PrimaryButton>
          </View>
          <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>지난달보다 </Text>
            <Text style={[styles.totalText, { color: "#1f9efd" }]}>
              196만원
            </Text>
            <Text style={styles.totalText}> 늘었어요</Text>
          </View>
          <View>
            <AnalyzeButton>분석 전체보기 〉</AnalyzeButton>
          </View>
        </View>
        <View style={styles.graph}>
          <CustomIcons name="총자산" width={110} height={110} />
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
  textButtonContainer: {
    marginTop: 30,
    marginLeft: 18,
  },
  total: {
    color: "white",
    fontSize: 20,
  },
  totalTextContainer: {
    flexDirection: "row",
  },
  totalText: {
    color: Colors.rowWhite,
    fontWeight: "bold",
  },
  innerStyle: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 14,
    paddingRight: 0,
    paddingBottom: 8,
    paddingTop: 0,
  },
  buttonContainer: {
    paddingLeft: 6,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 2,
    marginLeft: -20,
    width: "105%",
  },
  graph: {
    marginLeft: 67,
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Pretendard",
  },
});
