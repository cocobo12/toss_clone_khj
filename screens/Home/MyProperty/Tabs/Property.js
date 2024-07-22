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
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import CustomIcons from "../../../../components/UI/CustomIcons";
import LoanAdd from "../../../../components/PropertyComponents/Loan/LoanAdd";
import Item from "../../../../components/Item/Item";
import CommonButton from "../../../../components/Button/CommonButton";
import StockAdd from "../../../../components/PropertyComponents/Stock/StockAdd";
import PointStatic from "../../../../components/PropertyComponents/Point/PointStatic";
import OtherProperty from "../../../../components/PropertyComponents/OtherProperty/OtherProperty";

// 고정된 + 추가 컴포넌트
const addPassbook = new StaticItem("+입출금", "입출금 · 저출계좌 추가하기");

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
              <Item item={addPassbook} arrow={true} />
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
                  gridItem={styles.gridItem}
                  innerStyle={styles.innerButtonStyle}
                  pageHandler={pageHandler}
                >
                  숨긴 계좌 접기<Text> </Text>
                  <CustomIcons name="^" width={20} height={20} />
                </PrimaryButton>
              </View>
            </View>
          </View>
        );
      case "loan":
        return (
          <View style={styles.loanOuterContainer}>
            <Text style={styles.loanTitle}>대출</Text>
            <View style={styles.loanTotalContainer}>
              <Text style={styles.loanKeyword}>?</Text>
              <Text style={styles.loanTotal}>원</Text>
            </View>
            <View>
              <LoanAdd />
            </View>
          </View>
        );
      case "stock":
        return (
          <View style={styles.stockOuterContainer}>
            <Text style={styles.stockTitleText}>증권</Text>
            <View style={styles.stockTotalButtonContainer}>
              <Text style={styles.stockTotalText}>0원</Text>
              <View style={styles.collectButton}>
                <CommonButton>모아보기</CommonButton>
              </View>
            </View>
            <View style={styles.stockAddContainer}>
              <StockAdd />
            </View>
          </View>
        );
      case "point":
        return (
          <View style={styles.pointOuterContainer}>
            <Text style={styles.pointTitleText}>포인트 · 페이 머니</Text>
            <Text style={styles.pointTotalText}>7,749원</Text>
            <View style={styles.pointStaticContainer}>
              <PointStatic />
            </View>
            <View style={styles.lineAndBottom}>
              <PrimaryButton
                textColor={Colors.buttonTextGray}
                color={Colors.grayblack}
                gridItem={styles.gridItem}
                innerStyle={styles.innerButtonStyle}
                pageHandler={pageHandler}
              >
                숨긴 포인트 · 페이 머니 보기<Text> </Text>
                <CustomIcons name="v" width={13} height={13} />
              </PrimaryButton>
            </View>
          </View>
        );

      case "other":
        return (
          <View style={styles.pointOuterContainer}>
            <Text style={styles.pointTitleText}>기타 자산</Text>
            <Text style={styles.pointTotalText}>0원</Text>
            <View style={styles.pointStaticContainer}>
              <OtherProperty />
            </View>
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
    marginBottom: -1,
  },
  textOuterContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
    marginBottom: -1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    marginTop: 30,
  },
  passbookOuterContainer: {
    flex: 1,
    backgroundColor: Colors.grayblack,
    marginBottom: -1,
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
  gridItem: {
    flex: 1,
    elvation: 4,
    overflow: "hidden",
  },
  innerButtonStyle: {
    flex: 1,
    borderRadius: 0,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 2,
  },
  lineAndBottom: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginTop: 8, // 선과 버튼 사이의 간격
  },
  loanOuterContainer: {
    flex: 1,
    marginTop: 14,
    backgroundColor: Colors.grayblack,
    paddingBottom: 10,
  },
  loanTitle: {
    flex: 1,
    color: Colors.buttonTextGray,
    fontSize: 16,
    //fontWeight: "bold",
    fontFamily: "Pretendard",
    marginTop: 20,
    marginLeft: 18,
  },
  loanTotalContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 18,
  },
  loanTotal: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loanKeyword: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  stockOuterContainer: {
    flex: 1,
    marginTop: 14,
    backgroundColor: Colors.grayblack,
  },
  stockTitleText: {
    flex: 1,
    color: Colors.buttonTextGray,
    fontSize: 16,
    fontFamily: "Pretendard",
    marginTop: 20,
    marginLeft: 18,
  },
  stockTotalText: {
    color: "white",
    fontSize: 19,
    fontFamily: "Pretendard",
    marginTop: 6,
    marginLeft: 18,
  },
  stockTotalButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectButton: {
    marginRight: 16,
  },
  stockAddContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  pointOuterContainer: {
    flex: 1,
    marginTop: 14,
    backgroundColor: Colors.grayblack,
  },
  pointTitleText: {
    flex: 1,
    color: Colors.buttonTextGray,
    fontSize: 16,
    fontFamily: "Pretendard",
    marginTop: 20,
    marginLeft: 18,
  },
  pointTotalText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Pretendard",
    marginTop: 4,
    marginLeft: 18,
  },
  pointStaticContainer: {
    marginTop: 18,
    marginBottom: 10,
  },
});
