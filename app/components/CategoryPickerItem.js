import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icons";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
