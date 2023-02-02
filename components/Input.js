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
import { inputStyles } from "./Styles";

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
        <Text style={inputStyles.errorText}>
          Please enter a valid phone number
        </Text>
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
        <Text style={inputStyles.errorText}>
          Please enter a valid email address
        </Text>
      );
      setEmail("");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>Email adress</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        style={inputStyles.input}
      />
      {emailError}

      <Text style={inputStyles.title}>Phone number</Text>
      <TextInput
        style={inputStyles.input}
        value={phone}
        onChangeText={(phone) => {
          setPhone(phone);
        }}
        maxLength={10}
        keyboardType="numeric"
      />
      {phoneError}

      <View style={inputStyles.buttonContainer}>
        <View style={inputStyles.button}>
          <Button
            title="Reset"
            onPress={() => {
              resetInput();
              //setText("");
            }}
          />
        </View>

        <View style={inputStyles.button}>
          <Button
            title="Sign up"
            onPress={() => {
              const emailValid = checkEmail(email);
              const phoneValid = checkPhone(phone);
              if (phoneValid && emailValid) {
                sendData({ enteredEmail: email, enteredPhone: phone });
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}
