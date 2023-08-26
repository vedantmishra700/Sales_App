import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View>
      <View>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}> Red Jacket for sale</AppText>
          <AppText style={styles.subtitle}> $100</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subtitle="6 Listings"
            />
          </View>
        </View>
      </View>

      <View>
        <Image style={styles.image} source={require("../assets/couch.jpg")} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}> Couch in good Condition</AppText>
          <AppText style={styles.subtitle}> $1000</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subtitle="6 Listings"
            />
          </View>
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
