import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function onDataReceived(data) {
    setEmail(data.enteredEmail);
    setPhone(data.enteredPhone);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Starting sendData={onDataReceived} />
      <Confirm
        sendChangedEmail={email}
        sendChangedPhone={phone}
        modalIsVisible={modalVisible}
      />
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
