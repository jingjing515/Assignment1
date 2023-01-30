import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Starting from "./screens/Starting";

export default function App() {
  return (
    <View style={styles.container}>
      <Starting></Starting>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
