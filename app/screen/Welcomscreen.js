import React from "react";
import { Text, Image, View, ImageBackground, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Text style={styles.text}> Sell What You Don't Need</Text>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100,
  },
  text: {
    height: 200,
    position: "absolute",
    top: 220,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default WelcomeScreen;
