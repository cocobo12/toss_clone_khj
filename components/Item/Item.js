import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";

function Item({ item, totalStyle, onSelect, buttonText, arrow }) {
  console.log(item);
  console.log(item.title);
  console.log(item.name);
  console.log(item.subTitle);
  console.log(item.total);
  console.log(item.buttonOn);
  console.log(item.image);

  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  let button = "";

  if (item.buttonOn) {
    button = buttonText ? buttonText : item.buttonOn;
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
              {item.image ? (
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                </View>
              ) : (
                <CustomIcons name={item.name} />
              )}
            </View>
            <View style={styles.textContainer}>
              {item.total ? (
                <>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.totalSubContainer}>
                    <Text style={totalStyle ? totalStyle : styles.total}>
                      {item.total}
                    </Text>
                    <Text style={styles.subTitle}>
                      {item.subTitle ? item.subTitle : ""}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.singleTitleContainer}>
                    <Text style={styles.onlytitle}>{item.title}</Text>
                  </View>
                </>
              )}
            </View>
          </View>
          <View style={styles.noEffect}>
            {button ? (
              <SilenceButton
                color={Colors.noEffectGray}
                textColor={Colors.buttonTextGray}
              >
                {button}
              </SilenceButton>
            ) : arrow ? (
              <Text style={styles.arrow}>{arrow ? " 〉" : ""}</Text>
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
    marginHorizontal: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
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
    fontSize: 17,
  },
  subTitle: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 17,
  },
  totalSubContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    paddingHorizontal: 6,
  },
  noEffect: {
    flex: 1,
    alignItems: "flex-end",
    paddingVertical: 8,
  },
  icon: {
    marginLeft: -6,
  },
  singleTitleContainer: {
    flexDirection: "row",
    //justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  arrow: {
    color: "white",
  },
  imageContainer: {
    marginLeft: 7,
    marginRight: 14,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
});
