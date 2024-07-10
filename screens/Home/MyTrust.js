import { StyleSheet, View } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import TrustElement from "../../components/Board/BoardElement";
import { Colors } from "../../constants/colors";

function MyTrust() {
  return (
    <View style={[styles.outerContainer, { backgroundColor: Colors.grayComp }]}>
      <View style={styles.innerContainer}>
        <TrustElement />
        {<View style={styles.line} />}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              innerStyle={styles.smallButton}
              textColor={Colors.buttonTextGray}
            >
              계좌개설
            </PrimaryButton>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.button}>
            <PrimaryButton
              innerStyle={styles.smallButton}
              textColor={Colors.buttonTextGray}
            >
              카드발급
            </PrimaryButton>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.button}>
            <PrimaryButton
              innerStyle={styles.smallButton}
              textColor={Colors.buttonTextGray}
            >
              대출받기
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MyTrust;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    paddingHorizontal: 4,
  },
  line: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginHorizontal: 10,
    marginVertical: 2, // 선과 버튼 사이의 간격
  },
  smallButton: {
    paddingVertical: 12,
  },
  verticalLine: {
    width: 1, // 세로 선의 너비
    height: 22, // 세로 선의 높이
    marginTop: 15,
    backgroundColor: Colors.pressedGray, // 세로 선의 색상
  },
});
