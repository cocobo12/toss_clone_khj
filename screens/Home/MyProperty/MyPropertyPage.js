import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Property from "./Tabs/Property";
import CreateBank from "./Tabs/CreateBank";
import FindLoan from "./Tabs/FindLoan";
import { Colors } from "../../../constants/colors";
import { BottomTabContext } from "../../../store/context/BankBooks-context";

const Tab = createMaterialTopTabNavigator();

function MyPropertyPage() {
  const { updateTabBarStyle } = useContext(BottomTabContext);

  useEffect(() => {
    updateTabBarStyle({ display: "none" });
    return () => {
      updateTabBarStyle({ display: "" });
    };
  }, []);
  return (
    <View style={styles.outerContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarActiveTintColor: "white", // 누를때 버튼색
          tabBarInactiveTintColor: Colors.buttonTextGray, //안눌렸을떄 색
          tabBarLabelStyle: styles.tabBarLabel,
          // content색은 material-top-tabs에서 contentStyle 속성이 존재하지않기에, 직접 컴포넌트에서 해야된다.

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
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  tabBar: {
    backgroundColor: "black", // 탭 바의 배경색
    borderBottomColor: Colors.brightGray,
    borderBottomWidth: 0.2,
  },
  tabBarIndicator: {
    backgroundColor: "#fff", // 선택된 탭 아래의 표시기의 색상
    height: 2, // 표시기의 높이
    width: "25%",
    left: "4%"
  },
  tabBarLabel: {
    fontWeight: "bold",
    fontSize: 15,

  },
});
