import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";

export default function confirm({
  sendChangedEmail,
  sendChangedPhone,
  modalIsVisible,
  goBackButton,
  confirmButton,
  finishLaterButton,
}) {
  return (
    <View style={styles.container}>
      <Modal visible={modalIsVisible}>
        <Card>
          {/* <View style={styles.container}> */}
          <Text style={styles.message}>You have entered:</Text>
          <Text style={styles.message}>{sendChangedEmail}</Text>
          <Text style={styles.message}>{sendChangedPhone}</Text>
          <Text>Please confirm they are correct.</Text>

          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Go back"
              onPress={() => {
                goBackButton();
              }}
            />
            <Button
              title="Confirm"
              onPress={() => {
                confirmButton();
              }}
            />
            <Button
              title="Finish later"
              onPress={() => {
                finishLaterButton();
              }}
            />
          </View>
          {/* </View> */}
        </Card>
      </Modal>
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
  title: {
    width: "40%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  image: {
    height: 100,
    width: 100,
  },
  message: {
    borderBottomColor: "rebeccapurple",
    //borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
    paddingTop: 10,
    paddingLeft: 10,
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
});
