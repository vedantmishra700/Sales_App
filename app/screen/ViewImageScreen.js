import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
