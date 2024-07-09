import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/colors";

import RecommendButton from "../../components/Button/RecommendButton";
import PrimaryButton from "../../components/Button/PrimaryButton";

import RecommendElement from "../../components/Board/RecommendElement";

function RecommendedService() {
  return (
    <View style={[styles.outerContainer, { backgroundColor: Colors.grayComp }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>김형준님을 위해 준비했어요</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <RecommendButton color="#232323">카드론 받기</RecommendButton>
          </View>
          <View style={styles.button}>
            <RecommendButton color="#232323" secondLine="찾기">
              내게 맞는 대출
            </RecommendButton>
          </View>
        </View>
        
        <View>
          <RecommendElement />
          <RecommendElement />
          <RecommendElement />
        </View>

        {<View style={styles.line} />}

        <PrimaryButton innerStyle={styles.recommendButton}>
          추천 서비스 더보기
        </PrimaryButton>
      </View>
    </View>
  );
}

export default RecommendedService;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 6,
    marginBottom: 10,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 8,
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
  recommendButton: {
    paddingVertical: 16,
  },

  titleText: {
    color: "white",
    padding: 12,
  },
});
