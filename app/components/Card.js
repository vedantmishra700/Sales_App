import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native";

function Card({ title, subtitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Card;
