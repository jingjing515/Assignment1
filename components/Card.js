import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Card(props) {
  return <View style={StyleSheet.card}>{props.childern}</View>;
}

const Styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "dimgray",
    backgroundColor: "cornsilk",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
