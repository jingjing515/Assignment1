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
import Input from "../components/Input";

// Receive modalVisible in props
export default function Starting({
  sendChangedEmail,
  sendChangedPhone,
  modalIsVisible,
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    // use the received prop in visible prop of Modal
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <Text style={styles.email}>Email adress</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
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

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Sign up"
              onPress={() => {
                phoneInvalid(phone);
                //sendChangedEmail(email);
                //sendChangedPhone(phone);
              }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {
                resetInput();
                //setText("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
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
