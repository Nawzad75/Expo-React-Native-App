import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
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
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Diary"
          component={DiaryEntryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="book-open" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="DiaryShowScreen"
          component={DiaryShowScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="open-book" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="Calender"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={24} color="black" />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
