import Card from "../components/Card";
import Input from "../components/Input";
import { styles } from "../components/Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Starting({ sendData }) {
  function onDataEntered(data) {
    sendData(data);
  }

  return (
    //<SafeAreaView style={styles.container}>
    <LinearGradient
      colors={[styles.colorOne, styles.colorTwo]}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      <Card>
        <Input sendData={onDataEntered} />
      </Card>
      {/* </View> */}
      {/* </SafeAreaView>  */}
    </LinearGradient>
  );
}
