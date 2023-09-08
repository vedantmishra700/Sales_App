import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in good condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    padding: 12,
    backgroundColor: colors.light,
  },
});
