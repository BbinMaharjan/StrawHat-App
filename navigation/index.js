import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WellcomeScreen from "../screens/WellcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import UserHomeScreen from "../screens/UserHomeScreen";
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wellcome"
        component={WellcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign In"
        component={LoginScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "red" },
        }}
      />
      <Stack.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "skyblue" },
        }}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return <Tab.Navigator></Tab.Navigator>;
};

export default AppNavigator;
