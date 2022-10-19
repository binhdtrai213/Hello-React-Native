import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function popupNotification (msg) {
  alert(msg);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello react Native</Text>
      <Text>Your name: </Text>
      <TextInput
        defaultValue="Dao Thien Binh"
        style={{ borderColor: "black", borderWidth: 1, padding: 5 }}
      />
      <Button
        onPress={() => popupNotification('Saved')}
        title="save"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
      <TouchableOpacity>
        <Text>Save</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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