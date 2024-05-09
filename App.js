import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DevelopmentScreen from "./screens/DevelopmentScreen";
import PhotosScreen from "./screens/PhotosScreen";
import PrivateScreen from "./screens/PrivateScreen";
import * as React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (


    // Uncomment this block to use the Stack Navigator
    // <>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Overview" }}
    //     >
    //       {/* {(props) => <HomeScreen {...props} extraData={someData} />} // example of adding extra data/props */}
    //     </Stack.Screen>
    //     <Stack.Screen name="Development" component={DevelopmentScreen} />
    //     <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
    //     <Stack.Screen name="PrivateScreen" component={PrivateScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </>




    // Uncomment this block to use the Tab Navigator
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Development"
            component={DevelopmentScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="code-braces" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="PhotosScreen"
            component={PhotosScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="image" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="PrivateScreen"
            component={PrivateScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="lock" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

