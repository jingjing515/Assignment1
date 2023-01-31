import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useState } from "react";
//import Card from "../components/Card";

export default function Input() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  //
  //

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email adress</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        style={styles.input}
      />
      {emailError}

      <Text style={styles.title}>Phone number</Text>
      <TextInput
        value={phone}
        onChangeText={(phone) => {
          setPhone(phone);
        }}
        style={styles.input}
        maxLength={10}
        keyboardType="numeric"
      />
      {phoneError}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 5,
    marginVertical: 10,
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  email: {
    width: "50%",
    marginVertical: 10,
  },
});
