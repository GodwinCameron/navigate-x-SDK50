import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DevelopmentScreen from "./screens/DevelopmentScreen";
import PhotosScreen from "./screens/PhotosScreen";
import PrivateScreen from "./screens/PrivateScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Add navigation here
    // <HomeScreen />

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        >
          {/* {(props) => <HomeScreen {...props} extraData={someData} />} // example of adding extra data/props */}
        </Stack.Screen>
        <Stack.Screen name="Development" component={DevelopmentScreen} />
        <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
        <Stack.Screen name="PrivateScreen" component={PrivateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
