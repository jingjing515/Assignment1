import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import { useState } from "react";
import Finish from "./screens/Finish";
// import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState("false");
  const [finishLater, setFinishLater] = useState("false");
  const [finishVisible, setfinishVisible] = useState("false");
  //but finish is not a modal...

  function onDataReceived(data) {
    setEmail(data.enteredEmail);
    setPhone(data.enteredPhone);
    setModalVisible(true);
  }
  function hideModal() {
    // console.log("hideModal works");
    setModalVisible(false);
  }
  function isConfirmed() {
    // console.log("confirm work");
    setConfirmed(true);
  }
  function isFinishLater() {
    setFinishLater(true);
  }
  function isFinishVisible() {
    setfinishVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.container}
        /> */}

        <Starting sendData={onDataReceived} />
        <Confirm
          sendChangedEmail={email}
          sendChangedPhone={phone}
          modalIsVisible={modalVisible}
          goBackButton={hideModal}
          confirmButton={isConfirmed}
          finishLaterButton={isFinishLater}
        />
        {/* {setConfirmed === true || setFinishLater === true ? ( */}
        {confirmed || finishLater ? (
          <Finish
            confirmPressed={confirmed}
            finishLaterPressed={finishLater}
            phoneNumber={phone}
            finishIsVisible={finishVisible}
          />
        ) : // <Text>finish page</Text>
        null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
