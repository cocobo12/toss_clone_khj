import { ScrollView, View, Text, StyleSheet } from "react-native";


function FindLoan() {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.text}></Text>
      </View>
    </ScrollView>
  );
}

export default FindLoan;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  line: {},
  text: {
    color: "white",
  },
});
