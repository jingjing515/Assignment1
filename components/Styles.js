import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const styles = StyleSheet.create({
  colorOne: "#bdc3c7",
  colorTwo: "#2c3e50",

  container: {
    height: "100%",
    width: "100%",
    // flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  linearContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "100%",
    marginVertical: 1,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  buttonContainerByRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    width: "100%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "100%",
    marginVertical: 10,
  },
  message: {
    color: "rebeccapurple",
    width: "100%",
    marginVertical: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardStyle: {
    height: "80%",
    width: "80%",
    // flexWrap: "wrap",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "ivory",
    backgroundColor: "ivory",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 20,
    shadowRadius: 10,
    elevation: 10,
  },
});

export const inputStyles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  input: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "100%",

    // marginVertical: 1,
  },
  button: {
    width: "50%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: "column",
    marginTop: 10,
  },
  title: {
    width: "100%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "100%",
    marginVertical: 1,
  },
});
