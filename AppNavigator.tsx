import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CalendarScreen from "./components/CalenderScreen"; // Assuming you have a CalendarScreen
import DiaryEntryScreen from "./components/DiaryEntryScreen"; // Update the path to your DiaryEntryScreen component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="DiaryEntry" component={DiaryEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
