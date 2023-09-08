import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screen/ListingsScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
