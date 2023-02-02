import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";
import { styles } from "../components/Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function finish({
  confirmPressed,
  finishLaterPressed,
  phoneNumber,
  startAgainPressed,
}) {
  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={[styles.colorOne, styles.colorTwo]}
      style={styles.container}
    >
      <Card>
        {confirmPressed && (
          <>
            {/* <View style={styles.container}> */}
            <Text style={styles.message}>
              Thank you for signing up. Here's a picture for you, based on the
              last digit of your phone number.
            </Text>
            <Image
              style={styles.image}
              source={{
                uri: `https://picsum.photos/id/${
                  phoneNumber[phoneNumber.length - 1]
                }/100/100`,
              }}
            />
            {/* </View> */}
          </>
        )}
        {finishLaterPressed && (
          <>
            <Text style={styles.message}>Sorry to see you go.</Text>
            {/* <View style={styles.image}> */}
            <Image
              style={styles.image}
              source={require("../assets/sad1.png")}
            />
            {/* </View> */}
          </>
        )}
        <View style={styles.buttonContainer2}>
          <Button
            title="Start again"
            onPress={() => {
              startAgainPressed();
            }}
          />
        </View>
      </Card>
      {/* </View> */}
    </LinearGradient>
  );
}
