import { StyleSheet, Text, View } from "react-native";
import BellIcon from "../../assets/icons/bell-44.svg";

function CustomIcons({ name }) {
  let icon = <BellIcon width={24} height={24} fill="white" />;
  if (name === "우체국") {
    console.log(name);
    icon = <BellIcon width={24} height={24} fill="white" />;
  }

  return <View style={styles.icon}>{icon}</View>;
}

export default CustomIcons;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
