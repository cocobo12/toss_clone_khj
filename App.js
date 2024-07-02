import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

import WelcomeScreen from "./screens/WelcomeScreen";
import FundScreen from "./screens/FundScreen";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

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
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
      }}
    >
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={({ navigation }) => ({
          title: "Favorite Places",
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{ title: "Add a new Place" }}
      />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b", height: 50 },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
            headerTitle: "테스트",
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
    </>
  );
}
