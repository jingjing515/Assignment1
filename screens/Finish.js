import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";

export default function finish({
  confirmPressed,
  finishLaterPressed,
  phoneNumber,
  startAgainPressed,
}) {
  // console.log(confirmPressed + "inside finish");

  return (
    <View style={styles.container}>
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
        <View style={styles.buttonContainer}>
          <Button
            title="Start again"
            onPress={() => {
              startAgainPressed();
            }}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 100,
  },
  message: {
    color: "rebeccapurple",
    width: "100%",
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
    flexDirection: "column",
    marginTop: 10,
  },
});
