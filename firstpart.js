import react from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
``;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello World </Text>
      <TouchableOpacity
        onPress={() => {
          console.log("Image tapped");
        }}
      >
        <Image
          fadeDuration={4000}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200",
          }}
        />
      </TouchableOpacity>

      <Button
        title="Register"
        onPress={() =>
          Alert.prompt("title", "msg", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 90 : 0,
    paddingLeft: 60,
    paddingRight: 60,
  },
});
