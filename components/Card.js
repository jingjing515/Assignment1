import { View, Text, StyleSheet } from "react-native";
import React from "react";
//import { Card } from "react-native-paper";

export default function Card(props) {
  return (
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>{props.childern}</View>
    </View>
  );
}

const Styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    //alignContent: "center",
    //margin: 37,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 2,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
