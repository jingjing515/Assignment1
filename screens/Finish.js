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
  console.log(confirmPressed + "inside finish");

  return (
    <View style={styles.container}>
      <Card>
        {confirmPressed && (
          <>
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
          </>
        )}
        {finishLaterPressed && (
          <>
            <Text style={styles.message}>Sorry to see you go</Text>
            <Image style={styles.image} source={require("../assets/sad.png")} />
          </>
        )}
        <View style={styles.button}>
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
    // flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    borderBottomColor: "rebeccapurple",
    //borderBottomWidth: 2,
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
    flexDirection: "row",
  },
});
