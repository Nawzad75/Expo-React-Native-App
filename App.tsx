import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import CalenderScreen from "./components/CalenderScreen";
import DiaryEntryScreen from "./components/DiaryEntryScreen";
import DiaryShowScreen from "./components/DiaryShowScreen";
import HomeScreen from "./components/HomeScreen";

export type RootTabsParamList = {
  Home: undefined;
  Diary: { selectedDate: string };
  Calender: undefined;
  DiaryShowScreen: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Diary" component={DiaryEntryScreen} />
        <Tabs.Screen name="DiaryShowScreen" component={DiaryShowScreen} />
        <Tabs.Screen name="Calender" component={CalenderScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
