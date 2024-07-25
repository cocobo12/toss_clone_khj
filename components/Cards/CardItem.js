import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../constants/colors";
import CustomIcons from "../UI/CustomIcons";
import SilenceButton from "../Button/SilenceButton";
import { useFonts } from "expo-font";
import { deleteCard } from "../../util/database";
import PrimaryButton from "../Button/PrimaryButton";

function CardItem({ id, card, index, onSelect, deleteButton }) {
  console.log(id);
  console.log(card);
  console.log(card.title);
  console.log(card.name);
  console.log(card.image);
  console.log(index);

  // 계좌 생성 로직 x 생성로직은 하드코딩

  // 계좌 삭제
  async function deleteCardItem(id) {
    console.log("삭제 카드 id : ", id);
    await deleteCard(id);
    deleteButton();
  }

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
                {card.image ? (
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: card.image }} />
                  </View>
                ) : (
                  <CustomIcons name={card.name} />
                )}
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
                  pageHandler={deleteCardItem}
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
