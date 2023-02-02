import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";
import { styles } from "../components/Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function confirm({
  sendChangedEmail,
  sendChangedPhone,
  modalIsVisible,
  goBackButton,
  confirmButton,
  finishLaterButton,
}) {
  return (
    // <View style={styles.container}>
    <Modal visible={modalIsVisible}>
      {/* <View style={styles.container}> */}
      <LinearGradient
        colors={[styles.colorOne, styles.colorTwo]}
        style={styles.container}
      >
        <Card>
          {/* <View style={styles.container}> */}
          <Text style={styles.message}>You have entered:</Text>
          <Text style={styles.message}>{sendChangedEmail}</Text>
          <Text style={styles.message}>{sendChangedPhone}</Text>
          <Text style={styles.message}>Please confirm they are correct.</Text>

          <View style={styles.buttonContainer2}>
            <Button
              // style={styles.button}
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
        {/* </View> */}
      </LinearGradient>
    </Modal>
    /* </View> */
  );
}
