import AllBankBooks from "../../screens/Home/AllBankBooks";

import AllCardInfo from "../../screens/Home/AllCardInfo";

import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Board({ type, items }) {
  console.log(type);
  let outputItems;
  if (type === "bankbook") {
    console.log("뱅크북타입넘어옴");
    outputItems = <AllBankBooks bankbooks={items} />;
  } else if (type === "card") {
    console.log("카드타입넘어옴");
    outputItems = <AllCardInfo cards={items} />;
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        {outputItems ? (
          outputItems
        ) : (
          <Text style={styles.noAddText}>No added yet</Text>
        )}
      </View>
    </View>
  );
}

export default Board;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elvation: 4,
    borderRadius: 12,
    overflow: "hidden",
    //marginVertical: 5,
    //marginHorizontal: 5,
  },
  innerContainer: {
    backgroundColor: Colors.grayComp,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  noAddText: {
    textAlign: "center",
    color: "white",
  },
});
