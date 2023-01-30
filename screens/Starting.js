import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Card from "../components/Card";
//import Input from "../components/Input";

export default function Starting() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  //

  /*
  function changeEmail(changedEmail) {
    setEmail(changedEmail);
  }
  function changePhone(changedPhone) {
    setPhone(changedPhone);
  }
  */
  function resetInput() {
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
  }

  function phoneInvalid(phone) {
    if (phone.length != 10 || isNaN(phone)) {
      setPhoneError(
        <Text style={styles.errorText}>Please enter a valid phone number</Text>
      );
      setPhone("");
    } else {
      setPhoneError("");
    }
  }

  function emailInvalid(email) {
    if (email.length == 0) {
      setEmailError(
        <Text style={styles.errorText}>Please enter a valid email address</Text>
      );
      setEmail("");
    } else {
      setEmailError("");
    }
  }
  /*function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
  }
  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
  }
  // function buttonPressed() {
  //   sendChangedText(text);
  // }
  */
  return (
    <SafeAreaView style={styles.container}>
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
                phoneInvalid(phone);
                emailInvalid(email);
                //sendChangedEmail(email);
                //sendChangedPhone(phone);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    color: "rebeccapurple",
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
  title: {
    width: "50%",
    marginVertical: 5,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "50%",
    marginVertical: 10,
  },
});
