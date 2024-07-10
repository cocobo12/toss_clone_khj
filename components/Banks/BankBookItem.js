import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";

function BankBookItem({ bankbook, onSelect }) {
  console.log(bankbook);
  console.log(bankbook.title);
  console.log(bankbook.name);
  console.log(bankbook.subTitle);

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  let button = "";
  if (
    bankbook.title === "저축예금" ||
    bankbook.title === "토스뱅크 통장" ||
    bankbook.title === "증권 · 토스증권 계좌"
  ) {
    button = "송금";
  } else if (bankbook.title === "토스뱅크에 쌓인 이자") {
    button = "지금 받기";
  }

  return (
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
              <CustomIcons name={bankbook.name} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{bankbook.title}</Text>
              <View style={styles.totalSubContainer}>
                <Text style={styles.total}>{bankbook.total}</Text>
                <Text style={styles.subTitle}>
                  {bankbook.subTitle ? bankbook.subTitle : ""}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.noEffect}>
            {bankbook.buttonOn ? (
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
  );
}

export default BankBookItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginVertical: 1,
    borderRadius: 12,
    overflow: "hidden",
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
