import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons";

import { useIsDrawerOpen } from "@react-navigation/drawer";

import WellcomeScreen from "../screens/WellcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import UserHomeScreen from "../screens/UserHomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import UserSettingScreen from "../screens/SettingScreen";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const openDrawer = useIsDrawerOpen();

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
        component={DrawerNavigator}
        options={(props) => ({
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={30}
              color="white"
              onPress={() => props.navigation.openDrawer()}
            />
          ),
          headerTintColor: "white",
          headerStyle: { backgroundColor: "skyblue" },
        })}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return <Tab.Navigator></Tab.Navigator>;
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="Home" component={UserHomeScreen} />
      <Drawer.Screen name="Setting" component={UserSettingScreen} />
      <Drawer.Screen name="Profile" component={UserProfileScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
