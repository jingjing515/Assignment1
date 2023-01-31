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

export default function Input({ sendData }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  function resetInput() {
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
  }

  function checkPhone(phone) {
    console.log(phone);
    if (phone.length != 10 || isNaN(phone)) {
      setPhoneError(
        <Text style={styles.errorText}>Please enter a valid phone number</Text>
      );
      setPhone("");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  }

  function checkEmail(email) {
    console.log(email);
    if (email.length == 0 || !email.includes("@") || !email.includes(".")) {
      setEmailError(
        <Text style={styles.errorText}>Please enter a valid email address</Text>
      );
      setEmail("");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

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
        style={styles.input}
        value={phone}
        onChangeText={(phone) => {
          setPhone(phone);
        }}
        maxLength={10}
        keyboardType="numeric"
      />
      {phoneError}

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Reset"
            onPress={() => {
              resetInput();
              //setText("");
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Sign up"
            onPress={() => {
              const emailValid = checkEmail(email);
              const phoneValid = checkPhone(phone);
              if (phoneValid && emailValid) {
                sendData({ enteredEmail: email, enteredPhone: phone });
              }
              //sendChangedEmail(email);
              //sendChangedPhone(phone);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "40%",
    marginVertical: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  title: {
    width: "40%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "50%",
    marginVertical: 10,
  },
});
