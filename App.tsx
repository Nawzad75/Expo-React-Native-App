import * as Calendar from 'expo-calendar';
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function App() {

    useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "red",
          fontSize: 20,
          position: "absolute",
          top: 30,
        }}
      >
        Demo!
      </Text>
            <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
      {}
      <StatusBar style="auto" />

    </View>
  );
}
async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar', type: 'LOCAL' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3e5fc",
    alignItems: "center",
    justifyContent: "center",
  },
});
