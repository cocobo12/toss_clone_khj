import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";
import TotalProperty from "../../../../components/PropertyComponents/TotalProperty";
import PassBookTotal from "../../../../components/PropertyComponents/PassBookTotal";
import { Colors } from "../../../../constants/colors";
import BankBookList from "../../../../components/Banks/BankBookList";

import { useFonts } from "expo-font";
import ItemList from "../../../../components/Item/ItemList";
import StaticItem from "../../../../models/StaticItem";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchHidePassbook, fetchPassbook } from "../../../../util/database";
import Board from "../../../../components/Board/Board";
import PrimaryButton from "../../../../components/Button/PrimaryButton";

// 고정된 + 추가 컴포넌트
const addPassbook = [new StaticItem("+입출금", "입출금 · 저출계좌 추가하기")];

function Property() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../../../assets/fonts/static/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) return null;

  const [loadedPassbooks, setLoadedPassbooks] = useState([]);
  const [loadedHidePassbooks, setLoadedHidePassbooks] = useState([]);

  const isFocused = useIsFocused();

  // 바탐탭 숨김 (BottomTabContext 활용)
  useEffect(() => {
    async function loadPassbooks() {
      const passbooks = await fetchPassbook();
      console.log("db마이자산--------------------------");
      console.log(passbooks.rows._array);
      setLoadedPassbooks(passbooks.rows._array);
    }

    async function loadHidePassbooks() {
      const hidePassbooks = await fetchHidePassbook();
      console.log("db마이숨긴자산--------------------------");
      console.log(hidePassbooks.rows._array);
      setLoadedHidePassbooks(hidePassbooks.rows._array);
    }

    if (isFocused) {
      console.log("자산페이지 loadPassbooks");
      loadPassbooks();
      loadHidePassbooks();
    }
  }, [isFocused]);

  // 숨긴 계쫘 접기 버튼 등 핸들러
  function pageHandler() {
    console.log("pressed!!!");
  }

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "total":
        return (
          <View style={styles.totalContainer}>
            <TotalProperty />
          </View>
        );
      case "passbookTotal":
        return (
          <View style={styles.textOuterContainer}>
            <View style={styles.textContainer}>
              <PassBookTotal />
            </View>
          </View>
        );
      case "passbook":
        return (
          <View style={styles.passbookOuterContainer}>
            <Text style={styles.passbookTitle}>입출금</Text>
            <View>
              <ItemList items={loadedPassbooks} />
              <ItemList items={addPassbook} />
            </View>
          </View>
        );
      case "hidebook":
        return (
          <View style={styles.hidebookOuterContainer}>
            <Text style={styles.hidePassbookTitle}>숨긴 계좌</Text>
            <View>
              <ItemList items={loadedHidePassbooks} />

              <View style={styles.lineAndBottom}>
                <PrimaryButton
                  textColor={Colors.buttonTextGray}
                  color={Colors.grayblack}
                  innerStyle={styles.innerButtonStyle}
                  pageHandler={pageHandler}
                >
                  숨긴 계좌 접기
                </PrimaryButton>
              </View>
            </View>
          </View>
        );
      case "loan":
        return (
          <View style={styles.loanOuterContainer}>
            <Text style={styles.loanTitle}>대출</Text>
            <Text>?원</Text>
            <View></View>
            
          </View>
        );
      case "stock":
        return (
          <View>
            <Text>증권</Text>
            <Text>0원</Text>
            <View></View>
          </View>
        );
      case "point":
        return (
          <View>
            <Text>포인트 페이 머니</Text>
            <Text>7,749원</Text>
          </View>
        );

      case "other":
        return (
          <View>
            <Text>기타 자산</Text>
            <Text>10,030,000원</Text>
            <View></View>
          </View>
        );
      case "hideOther":
        return (
          <View>
            <Text>숨긴 기타 자산</Text>
            <View></View>
          </View>
        );
      case "insurance":
        return (
          <View>
            <Text>보험</Text>
            <View></View>
          </View>
        );
      case "add":
        return (
          <View>
            <View></View>
          </View>
        );
    }
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={[
          { type: "total" },
          { type: "passbookTotal" },
          { type: "passbook" },
          { type: "hidebook" },
          { type: "loan" },
          { type: "stock" },
          { type: "point" },
          { type: "other" },
          { type: "hideOther" },
          { type: "insurance" },
          { type: "add" },
        ]}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.type + index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Property;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  totalContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
  },
  textOuterContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    marginTop: 30,
  },
  passbookOuterContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
  },
  passbookTitle: {
    flex: 1,
    color: Colors.buttonTextGray,
    fontSize: 13,
    //fontWeight: "bold",
    fontFamily: "Pretendard",
    marginTop: 25,
    marginLeft: 14,
  },
  hidebookOuterContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
  },
  hidePassbookTitle: {
    flex: 1,
    color: Colors.buttonTextGray,
    fontSize: 13,
    //fontWeight: "bold",
    fontFamily: "Pretendard",
    marginTop: 20,
    marginLeft: 14,
  },
  innerButtonStyle: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  lineAndBottom: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginHorizontal: 10,
    marginTop: 2, // 선과 버튼 사이의 간격
    marginBottom: 6,
  },
  loanOuterContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: Colors.grayblack,
  },
  loanTitle: {
    flex:1,
    color: Colors.buttonTextGray,
    fontSize: 20,
    //fontWeight: "bold",
    fontFamily: "Pretendard",
    marginTop: 25,
    marginLeft: 14,
  },
});
