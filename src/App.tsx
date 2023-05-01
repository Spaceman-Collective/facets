import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { HomeScreen } from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Your NFTs"

      screenOptions={{
        tabBarActiveBackgroundColor: "#14191E",
        tabBarInactiveBackgroundColor: "#14191E",
        tabBarStyle:{
          borderTopColor:"#202932"
        },
        tabBarLabelStyle: {
          color: "white"

        },
        headerTitleStyle: {
          color: "#8499D1",
          fontWeight: "bold"
        },
        headerStyle: {
          backgroundColor: "#14191E",
          borderBottomColor: "#202932",
        },
        tabBarIconStyle: {
          display: "none"
        }
      }}
    >
      <Tab.Screen
        name="Your NFTs"
        options={{
          tabBarLabelPosition: "beside-icon"
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
