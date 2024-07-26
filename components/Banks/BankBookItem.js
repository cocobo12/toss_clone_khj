import { Pressable, StyleSheet, Text, View, Image} from "react-native";
import { useFonts } from "expo-font";

import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";
import PrimaryButton from "../Button/PrimaryButton";
import { deletePassbook } from "../../util/database";

function BankBookItem({ id, bankbook, onSelect, deleteButton }) {
  console.log(bankbook);
  console.log(bankbook.title);
  console.log(bankbook.name);
  console.log(bankbook.subTitle);
  console.log(bankbook.buttonOn);
  console.log(bankbook.status);
  console.log(bankbook.image);

  // 계좌 생성 로직 x 생성로직은 하드코딩

  // 계좌 삭제
  async function deletePassbookItem(id) {
    console.log("삭제 계좌 id : ", id);
    await deletePassbook(id);
    deleteButton();
  }

  // 폰트
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  let button = "";

  if (bankbook.buttonOn) {
    button = bankbook.buttonOn;
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
              {bankbook.image ? (
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: bankbook.image}}/>
                </View>
              ) : (
                <CustomIcons name={bankbook.name} />
              )}
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
            {button ? (
              <SilenceButton
                color={Colors.noEffectGray}
                textColor={Colors.buttonTextGray}
              >
                {button}
              </SilenceButton>
            ) : (
              ""
            )}
            {deleteButton ? (
              <PrimaryButton
                innerStyle={styles.deleteButtonInnerStyle}
                gridItem={styles.deleteGridItem}
                color="red"
                pageHandler={deletePassbookItem}
                id={id}
              >
                삭제
              </PrimaryButton>
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
  deleteGridItem: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 6,
  },
  deleteButtonInnerStyle: {
    borderRadius: 12,
    paddingVertical: 7,
    paddingHorizontal: 14,
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
