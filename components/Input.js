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
import Card from "../components/Card";

export default function Input() {
  //{
  //sendChangedEmail,
  //sendChangedPhone,
  //modalIsVisible,
  //}
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //

  //
  function changeEmail(changedEmail) {
    setEmail(changedEmail);
  }
  function changePhone(changedPhone) {
    setPhone(changedPhone);
  }
  function resetInput() {
    setEmail("");
    setPhone("");
  }

  function phoneInvalid(phone) {
    if (phone.length != 10) {
      alert("Please enter a valid phone number");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.email}>Email adress</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
          //------
          //handleValidEmail(email);
        }}
        style={styles.input}
      />

      <Text style={styles.email}>Phone number</Text>
      <TextInput
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        style={styles.input}
        maxLength={10}
        keyboardType="numeric"
      />
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
