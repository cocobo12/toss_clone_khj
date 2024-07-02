import { View, Text, Button, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

function FundScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" />;
      },
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default FundScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
