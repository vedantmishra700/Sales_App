import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {listing.title}</AppText>
        <AppText style={styles.subtitle}> ${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="6 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
});
