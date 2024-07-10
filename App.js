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
import Map from "./components/PlaceComponets/Map";

// 네비게이션
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 스토어
import BankBooksContextProvider from "./store/context/BankBooks-context";

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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <BankBooksContextProvider>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: { height: 50, backgroundColor: Colors.grayComp },
              tabBarActiveTintColor: "#FFFFFF",
            }}
          >
            <BottomTab.Screen
              name="홈"
              component={MainPage}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Foundation name="home" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="혜택"
              component={FundScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="diamond"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <BottomTab.Screen
              name="토스페이"
              component={WelcomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="bag" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="주식"
              component={FundScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="area-graph" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="전체"
              component={WelcomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Foundation name="list" color={color} size={size} />
                ),
              }}
            />
          </BottomTab.Navigator>
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
});
