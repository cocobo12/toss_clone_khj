import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";
import { useFonts } from "expo-font";

function CardItem({ card, index, onSelect }) {
  console.log(card);
  console.log(card.title);
  console.log(card.name);
  console.log(index);

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  let button = "내역";

  return (
    <View style={styles.container}>
      {index !== 0 && <View style={styles.line} />}
      <View style={styles.outerContainer}>
        <Pressable
          onPress={onSelect}
          android_ripple={{ color: Colors.pressedGray, borderless: false }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
        >
          <View style={styles.innerContainer}>
            <View style={styles.iconTitleContainer}>
              <View style={styles.icon}>
                <CustomIcons name={card.name} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{card.title}</Text>
                <View style={styles.totalSubContainer}>
                  <Text style={styles.total}>{card.total}</Text>
                  <Text style={styles.subTitle}>
                    {card.subTitle ? card.subTitle : ""}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.noEffect}>
              {card.buttonOn ? (
                <SilenceButton
                  color={Colors.noEffectGray}
                  textColor={Colors.buttonTextGray}
                >
                  {button}
                </SilenceButton>
              ) : (
                ""
              )}
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default CardItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
  },
  outerContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  line: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginHorizontal: 10,
    marginVertical: 6, // 선과 버튼 사이의 간격
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  iconTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: 5,
  },
  title: {
    color: Colors.buttonTextGray,
    fontSize: 12,
  },
  total: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 20,
  },
  subTitle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 20,
  },
  totalSubContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  noEffect: {
    flex: 1,
    alignItems: "flex-end",
    paddingVertical: 8,
  },
  icon: {
    marginLeft: -6,
  },
});
