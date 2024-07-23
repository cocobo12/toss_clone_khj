import { View, Text, StyleSheet, FlatList } from "react-native";
import InputPassbook from "./InputPassbook";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Board from "../../../../components/Board/Board";
import { fetchAllPassbook } from "../../../../util/database";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import { Colors } from "../../../../constants/colors";

function EditPassbook() {
  const [loadedPassbooks, setLoadedPassbooks] = useState([]);

  const isFocused = useIsFocused();
  console.log("useEffect후");
  console.log(isFocused);

  useEffect(() => {
    async function loadPassbooks() {
      const passbooks = await fetchAllPassbook();
      console.log("db통장 데이터--------------------------");
      console.log(passbooks.rows._array);
      setLoadedPassbooks(passbooks.rows._array);
    }

    if (isFocused) {
      console.log("홈 loadPassbooks");
      loadPassbooks();
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "newPassbook":
        return (
          <View style={styles.itemContainer}>
            <InputPassbook />
          </View>
        );

      case "button":
        return (
          <View style={styles.buttonContainer}>
            <PrimaryButton color={Colors.analyzeButton} fontSize={18}>등록</PrimaryButton>
          </View>
        );

      case "passbookList":
        return (
          <View style={styles.bankContainer}>
            <Board type="bankbook" items={loadedPassbooks} button={false} />
          </View>
        );
    }
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={[
          { type: "newPassbook" },
          { type: "button" },
          { type: "passbookList" },
        ]}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.type + index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default EditPassbook;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 40,
  },
  bankContainer: {
    marginTop: 24,
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
