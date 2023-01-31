import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";

export default function confirm({
  sendChangedEmail,
  sendChangedPhone,
  modalIsVisible,
}) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
  }
  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Modal visible={modalIsVisible}>
          <Text>You have entered:</Text>
          <Text>{enteredEmail}</Text>
          <Text>{enteredPhone}</Text>
          <Text>Please confirm they are correct.</Text>

          <Button title="Go back" />

          <Button title="Confirm" />

          <Button title="Finish later" />
        </Modal>
      </Card>
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
  image: {
    height: 100,
    width: 100,
  },
  input: {
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
  },
  button: { width: "30%", marginHorizontal: 5, color: "red" },
  buttonContainer: {
    flexDirection: "row",
  },
});
