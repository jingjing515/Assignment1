import { StatusBar } from "expo-status-bar";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import { useState } from "react";
import Finish from "./screens/Finish";
import { styles } from "./components/Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [finishLater, setFinishLater] = useState(false);

  function onDataReceived(data) {
    setEmail(data.enteredEmail);
    setPhone(data.enteredPhone);
    setModalVisible(true);
  }
  function hideModal() {
    setModalVisible(false);
  }
  function isConfirmed() {
    setConfirmed(true);
    hideModal();
  }
  function isFinishLater() {
    setFinishLater(true);
    hideModal();
  }

  function resetInput() {
    setConfirmed(false);
    setFinishLater(false);
    setEmail("");
    setPhone("");
  }

  return (
    // <SafeAreaView style={styles.container}>
    // <View style={styles.container}>
    <LinearGradient
      colors={[styles.colorOne, styles.colorTwo]}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <Confirm
        sendChangedEmail={email}
        sendChangedPhone={phone}
        modalIsVisible={modalVisible}
        goBackButton={hideModal}
        confirmButton={isConfirmed}
        finishLaterButton={isFinishLater}
      />
      {confirmed || finishLater ? (
        <Finish
          confirmPressed={confirmed}
          finishLaterPressed={finishLater}
          phoneNumber={phone}
          startAgainPressed={resetInput}
        />
      ) : (
        <Starting sendData={onDataReceived} />
      )}
      {/* </View> */}
      {/* </SafeAreaView> */}
    </LinearGradient>
  );
}
