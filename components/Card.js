import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    height: "70%",
    width: "80%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "dimgray",
    backgroundColor: "cornsilk",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
    //marginLeft: 5,
    //marginRight: 5,
    //marginTop: 10,
    // marginHorizontal: 18,
    // marginVertical: 10,
  },
  // cardContent: {
  //   marginHorizontal: 18,
  //   marginVertical: 10,
  // },
});
