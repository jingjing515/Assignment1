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
import Input from "../components/Input";
import Confirm from "./Confirm";

export default function Starting({ sendData }) {
  function onDataEntered(data) {
    sendData(data);
  }

  // function resetInput() {
  //   setEmail("");
  //   setPhone("");
  //   setEmailError("");
  //   setPhoneError("");
  // }

  // function phoneInvalid(phone) {
  //   if (phone.length != 10 || isNaN(phone)) {
  //     setPhoneError(
  //       <Text style={styles.errorText}>Please enter a valid phone number</Text>
  //     );
  //     setPhone("");
  //   } else {
  //     setPhoneError("");
  //   }
  // }

  // function emailInvalid(email) {
  //   if (email.length == 0) {
  //     setEmailError(
  //       <Text style={styles.errorText}>Please enter a valid email address</Text>
  //     );
  //     setEmail("");
  //   } else {
  //     setEmailError("");
  //   }
  // }

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Card>
        <Input sendData={onDataEntered} />

        {/* <Text style={styles.title}>Email adress</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
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
        {phoneError} */}

        {/* <View style={styles.buttonContainer}>
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
          </View> */}
      </Card>
    </View>
    /* </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  // input: {
  //   color: "rebeccapurple",
  //   borderBottomColor: "rebeccapurple",
  //   borderBottomWidth: 2,
  //   width: "40%",
  //   marginVertical: 10,
  // },
  // button: {
  //   width: "30%",
  //   marginHorizontal: 10,
  //   marginVertical: 10,
  //   color: "red",
  // },
  // buttonContainer: {
  //   flexDirection: "row",
  // },
  // title: {
  //   width: "40%",
  //   marginVertical: 10,
  //   color: "rebeccapurple",
  //   fontSize: 25,
  // },
  // errorText: {
  //   width: "50%",
  //   marginVertical: 10,
  // },
});
