import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />

      <AppForm
        initialValues={{ name: " ", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="account"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
        />

        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          name="password"
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
