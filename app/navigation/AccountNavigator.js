import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
