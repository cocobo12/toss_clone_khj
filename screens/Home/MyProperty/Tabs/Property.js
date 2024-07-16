import { ScrollView, View, Text, StyleSheet } from "react-native";
import TotalProperty from "../../../../components/PropertyComponents/TotalProperty";

function Property() {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.line}></View>
      <View>
        <TotalProperty/>
      </View>
    </ScrollView>
  );
}

export default Property;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  line: {

  },
  text: {
    color: "white",
  },
});
