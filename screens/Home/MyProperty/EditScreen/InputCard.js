import { StyleSheet, View } from "react-native";
import InputForm from "../../../../components/Edit/InputForm";

function InputCard() {
  function nameChangeHandler(input) {
    console.log(input);
  }
  return (
    <View style={styles.inputOuterContainer}>
      <InputForm label={"아이템"} textChangeHandler={nameChangeHandler} />
      <InputForm label={"아이템"} textChangeHandler={nameChangeHandler} />
      <InputForm label={"아이템"} textChangeHandler={nameChangeHandler} />
    </View>
  );
}

export default InputCard;

const styles = StyleSheet.create({
  inputOuterContainer: {
    marginHorizontal: 10,
  },
});
