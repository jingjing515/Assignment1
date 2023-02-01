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

  return (
    //<SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Card>
        <Input sendData={onDataEntered} />
      </Card>
    </View>
    //</SafeAreaView>
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
