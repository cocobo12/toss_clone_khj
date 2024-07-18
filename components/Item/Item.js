import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";

function Item({ item, onSelect, buttonText }) {
  console.log(item);
  console.log(item.title);
  console.log(item.name);
  console.log(item.subTitle);

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

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
              <CustomIcons name={item.name} />
            </View>
            <View style={styles.textContainer}>
              {item.total ? (
                <>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.totalSubContainer}>
                    <Text style={styles.total}>{item.total}</Text>
                    <Text style={styles.subTitle}>
                      {item.subTitle ? item.subTitle : ""}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.onlytitle}>{item.title}</Text>
                </>
              )}
            </View>
          </View>
          <View style={styles.noEffect}>
            {item.buttonOn ? (
              <SilenceButton
                color={Colors.noEffectGray}
                textColor={Colors.buttonTextGray}
              >
                {buttonText}
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

export default Item;

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
  onlytitle: {
    color: Colors.buttonTextGray,
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    color: Colors.buttonTextGray,
    fontSize: 12,
    fontWeight: "bold",
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
