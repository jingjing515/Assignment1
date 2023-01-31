import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";

export default function finish() {
  return (
    <View>
      <Card>
        <Text>finish</Text>
        {/* condition start */}
        {/* if press confirm*/}
        <Text>
          Thank you for signing up. Here's a picture for you(based on the last
          digit of your phone number.)
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/id/${
              enteredPhone[enteredPhone.length - 1]
            }/100/100`,
          }}
        />
        {/* if press finish later */}
        <Text>Sorry to see you go</Text>
        <Image
          style={styles.image}
          source={require("C:Usersskymy-appassetssad-png.png")}
        />

        {/* condition over  */}
        <Button
          title="Start again"
          onPress={() => {
            resetInput();
          }}
        />
      </Card>
    </View>
  );
}
