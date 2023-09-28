import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { RootTabsParamList } from "../App";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

LocaleConfig.defaultLocale = "en";

type Props = BottomTabScreenProps<RootTabsParamList, "Calender">;

const CalendarScreen: React.FC<Props> = ({ navigation }) => {
  const handleDatePress = (day: DateData) => {
    // Navigate to DiaryEntryScreen with the selected date
    navigation.navigate("Diary", { selectedDate: day.dateString });
  };

  return (
    <View>
      <Calendar onDayPress={handleDatePress} />
    </View>
  );
};

export default CalendarScreen;
