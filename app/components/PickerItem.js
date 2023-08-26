import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.padd}>
      <View style={styles.conn}>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conn: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: colors.light,
    alignItems: "center",
  },
  padd: {
    paddingVertical: 12,
  },
  text: {
    fontWeight: "bold",
  },
});
