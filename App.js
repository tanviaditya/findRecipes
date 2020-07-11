import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RecipiePage from "./src/screens/RecipiePage";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RecipiePage: RecipiePage,
  },
  {
    initialRouteName: "",
    defaultNavigationOptions: {
      title: "Recipies",
    },
  }
);

export default createAppContainer(navigator);
