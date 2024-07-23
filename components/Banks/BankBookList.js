import { FlatList, Text, View } from "react-native";
import BankBookItem from "./BankBookItem";

function BankBookList({ bankbooks }) {
  console.log("뱅크북리스트로넘어옴");
  console.log(bankbooks);
  if (!bankbooks || bankbooks.length === 0) {
    return (
      <View>
        <Text>No bankbooks added yet</Text>
      </View>
    );
  }

  function selectHandler() {}

  return (
    <FlatList
      data={bankbooks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BankBookItem bankbook={item} onSelect={selectHandler} />
      )}
    />
  );
}

export default BankBookList;
