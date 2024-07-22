import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Property from "./Tabs/Property";
import CreateBank from "./Tabs/CreateBank";
import FindLoan from "./Tabs/FindLoan";
import { Colors } from "../../../constants/colors";
import { BottomTabContext } from "../../../store/context/BankBooks-context";
import { useIsFocused } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

function MyPropertyPage() {
  const { updateTabBarStyle } = useContext(BottomTabContext);
  const isFocused = useIsFocused();

  console.log("마이자산페이지");
  console.log(isFocused);

  // 바탐탭 숨김 (BottomTabContext 활용)
  useEffect(() => {
    updateTabBarStyle({ display: "none" });
    return () => {
      updateTabBarStyle({ display: "" });
    };
  }, [isFocused]);

  return (
    <View style={styles.outerContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarActiveTintColor: "white", // 누를때 버튼색
          tabBarInactiveTintColor: Colors.tabTextGray, //안눌렸을떄 색
          tabBarLabelStyle: styles.tabBarLabel,
          // content색은 material-top-tabs에서 contentStyle 속성이 존재하지않기에, 직접 컴포넌트에서 해야된다.
          //tabBarPressOpacity: 5,
          //tabBarPressColor: Colors.tabPressGray,
          tabBarAndroidRipple: { color: Colors.pressedGray, borderless: false },
        }}
      >
        <Tab.Screen name="자산" component={Property} />
        <Tab.Screen name="계좌 개설" component={CreateBank} />
        <Tab.Screen name="대출 찾기" component={FindLoan} />
      </Tab.Navigator>
    </View>
  );
}

export default MyPropertyPage;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: Colors.grayblack, // 탭 바의 배경색
    borderBottomColor: Colors.tabLine,
    borderBottomWidth: 0.2,
    overflow: "hidden",
  },
  tabBarIndicator: {
    backgroundColor: "#fff", // 선택된 탭 아래의 표시기의 색상
    height: 1.5, // 표시기의 높이
    width: "24%",
    left: "5%",
  },
  tabBarLabel: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
