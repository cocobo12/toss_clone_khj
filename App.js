import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

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
import { Colors } from "./constants/colors";

// 컴포넌트
import WelcomeScreen from "./components/PlaceComponets/WelcomeScreen";
import Home from "./screens/Home/Home";
import FundScreen from "./screens/FundScreen";
import PropertyManage from "./screens/Home/MyProperty/EditScreen/PropertyManage";

// 네비게이션
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 스토어
import BankBooksContextProvider, {
  BottomTabContext,
} from "./store/context/BankBooks-context";
import MyPropertyPage from "./screens/Home/MyProperty/MyPropertyPage";
import { useEffect, useState } from "react";
import PrimaryButton from "./components/Button/PrimaryButton";
import { init } from "./util/database";

//import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import initializeData from "./data/dummy-data";

function inputFormHandler(navigation) {
  console.log("입풋폼으로 이동");
  navigation.navigate("PropertyManage");
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
          headerStyle: { backgroundColor: Colors.grayblack },

          headerRight: () => (
            <View>
              <PrimaryButton
                color={Colors.grayblack}
                textColor={Colors.rowWhite}
                gridItem={styles.gridItem}
                innerStyle={styles.fixButtonStyle}
                pageHandler={() => inputFormHandler(navigation)}
              >
                편집
              </PrimaryButton>
            </View>
          ),
          headerTitle: "",
          headerLeft: () => (
            <View style={styles.backButton}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color={Colors.rowWhite} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      <Stack.Screen name="PropertyManage" component={PropertyManage} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
        initializeData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading experience.
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync();
      }
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
                    height: 60,
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
                    marginBottom: 12,
                  },
                  tabBarIconStyle: {
                    marginTop: 2,
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
  backButton: {
    marginTop: 5,
    marginLeft: -8,
  },
});
