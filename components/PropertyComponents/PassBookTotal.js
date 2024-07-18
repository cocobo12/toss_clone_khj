import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { useFonts } from "expo-font";

function PassBookTotal() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/static/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) return null;

  let total = "53,188,409";

  return (
    <View>
      <Text style={styles.text}>계좌</Text>
      <Text style={styles.total}>{total}원</Text>
    </View>
  );
}

export default PassBookTotal;

const styles = StyleSheet.create({
  text: {
    color: Colors.buttonTextGray,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  total: {
    color: "white",
    fontSize: 20,
    fontFamily: "Pretendard",
    //fontWeight: "bold",
  },
  textContainer: {},
});
