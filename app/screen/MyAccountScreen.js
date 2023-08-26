import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MyAccountScreen() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.tab1}>
        <Image style={styles.image} source={require("../assets/mosh.jpg")} />
        <View>
          <AppText style={styles.title}> Mosh Hamedani</AppText>
          <AppText style={styles.subtitle}>
            programmingwithmosh@gmail.com
          </AppText>
        </View>
      </View>
      <View style={styles.tab2}>
        <View style={styles.circular1}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color="#fff"
            size={20}
            borderRadius={20}
          />
        </View>
        <Text style={styles.text}> My Listings</Text>
      </View>
      <View style={styles.tab2}>
        <View style={styles.circular2}>
          <MaterialCommunityIcons
            name="email"
            color="#fff"
            size={20}
            borderRadius={20}
          />
        </View>
        <Text style={styles.text}> My Messages</Text>
      </View>
      <View style={styles.tab2}>
        <View style={styles.circular3}>
          <MaterialCommunityIcons
            name="logout"
            color="#fff"
            size={20}
            borderRadius={20}
          />
        </View>
        <Text style={styles.text}> Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circular1: {
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: colors.primary,
    marginLeft: 8,
    marginTop: 7,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  circular2: {
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: colors.secondary,
    marginLeft: 8,
    marginTop: 7,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  circular3: {
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: "#ffe66d",
    marginLeft: 8,
    marginTop: 7,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#faebd7",
  },
  tab1: {
    width: "100%",
    height: 75,
    backgroundColor: colors.white,
    marginTop: 70,
    flexDirection: "row",
    marginBottom: 50,
    alignItems: "center",
  },
  tab2: {
    width: "100%",
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
  },
  subtitle: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.medium,
  },
});
