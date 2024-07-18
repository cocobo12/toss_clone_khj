import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// 아이콘, 스타일링
import { Ionicons } from "@expo/vector-icons";
import TossLogo from "./assets/icons/tosslogo.svg";
import BellIcon from "./assets/icons/bell-44.svg";
import FaceLogo from "./assets/icons/face.svg";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

// 컴포넌트
import WelcomeScreen from "./components/PlaceComponets/WelcomeScreen";
import Home from "./screens/Home/Home";
import FundScreen from "./screens/FundScreen";

// 네비게이션
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 스토어
import BankBooksContextProvider, {
  BottomTabContext,
} from "./store/context/BankBooks-context";
import MyPropertyPage from "./screens/Home/MyProperty/MyPropertyPage";
import { useContext, useEffect, useState } from "react";
import PrimaryButton from "./components/Button/PrimaryButton";
import { init, insertPassbook } from "./util/database";

//import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

function onPressFunction() {
  console.log("haha");
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="토스증권" component={FundScreen} />
    </Drawer.Navigator>
  );
}

function MainPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.black, height: 40 },
        headerTintColor: "#7f7d7d",
        tabBarActiveTintColor: "#3c0a6b",
        animation: "slide_from_bottom",
        stackAnimation: "slide_from_bottom",
        headerTitle: () => <Text style={styles.headerTitle}> toss</Text>,
        headerLeft: () => {
          return <TossLogo width={32} height={30} />;
        },
        headerRight: () => {
          return (
            <View style={styles.homeHeaderRight}>
              <View style={styles.facelogo}>
                <FaceLogo width={30} height={30} />
              </View>
              <BellIcon width={28} height={28} fill="#7f7d7d" />
            </View>
          );
        },
        contentStyle: { backgroundColor: Colors.black },
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen
        name="MyPropertyPage"
        component={MyPropertyPage}
        options={({ navigation }) => ({
          headerRight: () => (
            <View>
              <PrimaryButton
                color={Colors.black}
                textColor={Colors.rowWhite}
                gridItem={styles.gridItem}
                innerStyle={styles.fixButtonStyle}
              >
                편집
              </PrimaryButton>
            </View>
          ),
          headerLeft: () => {},
          headerTitle: "",
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  async function initializeData() {
    const DUMMY_BANKBOOK = [
      new BankBook("토스뱅크 통장", "토스뱅크 통장", "원", "10,000", true),
      new BankBook("토스뱅크 이자", "토스뱅크에 쌓인 이자", "원", "58", true),
      new BankBook("모임통장", "모임통장", "원", "1,146,147", false),
      new BankBook("우체국", "저축예금", "원", "50,000,000", true),
      new BankBook("토스증권", "증권 · 토스증권 계좌", "원", "0", true),
      new BankBook("기타자산", "기타 자산", "", "잔액 보기", false),
    ];

    const DUMMY_CARD = [
      new Card("카드내역", "7월에 쓴 돈", "원", "538,238", true),
      new Card("D15", "7월 25일 낼 카드값", "원", "291,810", false),
    ];

    for (let i = 0; i < DUMMY_BANKBOOK.length; i++) {
      console.log(DUMMY_BANKBOOK[i]);
      await insertPassbook(DUMMY_BANKBOOK[i]);
    }

    for (let i = 0; i < DUMMY_CARD.length; i++) {
      console.log(DUMMY_CARD[i]);
      await insertPassbook(DUMMY_CARD[i]);
    }
  }

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      // Pre-load stuff, if needed
      await SplashScreen.hideAsync();
    };

    prepare();
  }

  return (
    <>
      <StatusBar style="light" />
      <BankBooksContextProvider>
        {/* <Provider> </Provider>*/}
        <NavigationContainer>
          <BottomTabContext.Consumer>
            {({ tabBarStyle }) => (
              <BottomTab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarStyle: {
                    height: 50,
                    backgroundColor: Colors.grayComp,
                    borderTopWidth: 1,
                    borderColor: Colors.brightGray,
                    borderTopStartRadius: 15,
                    borderTopEndRadius: 15,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                    position: "absolute",
                    overflow: "hidden",
                    marginRight: -1,
                    ...tabBarStyle,
                  },
                  tabBarActiveTintColor: "#FFFFFF",
                  tabBarLabelStyle: {
                    fontSize: 11, // 텍스트 크기
                    fontWeight: "bold", // 텍스트 굵기
                    marginBottom: 6,
                  },
                }}
              >
                <BottomTab.Screen
                  name="홈"
                  component={MainPage}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <View style={styles.homeContainer}>
                        <Foundation name="home" size={size} color={color} />
                      </View>
                    ),
                  }}
                />
                <BottomTab.Screen
                  name="혜택"
                  component={FundScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                          name="diamond"
                          size={size}
                          color={color}
                        />
                      </View>
                    ),
                  }}
                />
                <BottomTab.Screen
                  name="토스페이"
                  component={WelcomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <View style={styles.iconContainer}>
                        <Ionicons name="bag" size={size} color={color} />
                      </View>
                    ),
                  }}
                />
                <BottomTab.Screen
                  name="주식"
                  component={FundScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <View style={styles.iconContainer}>
                        <Entypo name="area-graph" size={size} color={color} />
                      </View>
                    ),
                  }}
                />
                <BottomTab.Screen
                  name="전체"
                  component={WelcomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <View style={styles.iconContainer}>
                        <Foundation name="list" color={color} size={size} />
                      </View>
                    ),
                  }}
                />
              </BottomTab.Navigator>
            )}
          </BottomTabContext.Consumer>
        </NavigationContainer>
      </BankBooksContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  homeHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: "#7f7d7d",
    fontSize: 25, // 원하는 크기로 변경
    fontWeight: "bold",
  },
  facelogo: {
    marginRight: 14,
  },
  homeContainer: {
    //position: "absolute",
    marginBottom: -6,
  },
  iconContainer: {
    marginBottom: -6,
  },
  gridItem: {
    flex: 1,
    elvation: 4,
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 3,
  },
  fixButtonStyle: {
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
});
