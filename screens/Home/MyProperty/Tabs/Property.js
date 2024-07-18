import { ScrollView, View, Text, StyleSheet } from "react-native";
import TotalProperty from "../../../../components/PropertyComponents/TotalProperty";
import PassBookTotal from "../../../../components/PropertyComponents/PassBookTotal";
import { Colors } from "../../../../constants/colors";
import BankBookList from "../../../../components/Banks/BankBookList";

import { useFonts } from "expo-font";
import ItemList from "../../../../components/Item/ItemList";
import StaticItem from "../../../../models/StaticItem";

const addPassbook = [new StaticItem("+입출금", "입출금 · 저출계좌 추가하기")];

function Property({ route }) {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../../../assets/fonts/static/Pretendard-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  console.log("계좌내역데이터");
  console.log(route.params.passbooks);
  const bankbooks = route.params.passbooks;
  return (
    <ScrollView style={styles.content}>
      {/* 총자산 */}
      <View>
        <TotalProperty />
      </View>

      {/* 계좌 */}
      <View style={styles.textContainer}>
        <PassBookTotal />
      </View>

      {/* 입출금 passbook */}
      <View>
        <Text style={styles.passbookTitle}>입출금</Text>
        <View>
          <BankBookList bankbooks={bankbooks} />
          <ItemList items={addPassbook} />
        </View>
      </View>

      {/* 숨긴 계좌 */}
      <View>
        <Text>숨긴 계좌</Text>
        <View></View>
      </View>

      {/* 대출 */}
      <View>
        <Text>대출</Text>
        <Text>?원</Text>
        <View></View>
      </View>

      {/* 증권 */}
      <View>
        <Text>증권</Text>
        <Text>0원</Text>
        <View></View>
      </View>

      {/* 포인트 */}
      <View>
        <Text>포인트 페이 머니</Text>
        <Text>7,749원</Text>
      </View>

      {/* 기타 자산 */}
      <View>
        <Text>기타 자산</Text>
        <Text>10,030,000원</Text>
        <View></View>
      </View>

      {/* 숨긴 기타 자산 */}
      <View>
        <Text>숨긴 기타 자산</Text>
        <View></View>
      </View>

      {/* 보험 */}
      <View>
        <Text>보험</Text>
        <View></View>
      </View>

      {/* 추가 */}
      <View>
        <View></View>
      </View>
    </ScrollView>
  );
}

export default Property;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  textContainer: {
    marginLeft: 16,
    marginTop: 30,
  },
  passbookOuterContainer: {},
  passbookTitle: {
    color: Colors.buttonTextGray,
    fontSize: 13,
    //fontWeight: "bold",
    fontFamily: "Pretendard",
    marginTop: 25,
    marginLeft: 14,
  },
});
