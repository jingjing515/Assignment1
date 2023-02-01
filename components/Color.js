import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Color = () => {
  return (
    <View>
      <Text>Color</Text>
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "40%",
    marginVertical: 10,
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
  title: {
    width: "40%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "50%",
    marginVertical: 10,
  },
});
