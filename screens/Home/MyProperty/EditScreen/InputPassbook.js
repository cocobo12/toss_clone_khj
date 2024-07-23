import { StyleSheet, View } from "react-native";
import InputForm from "../../../../components/Edit/InputForm";
import InputImage from "./InputImage";
import { useState } from "react";

function InputPassbook() {
  const [passbook, setPassbook] = useState({
    name: "",
    amount: "",
    unit: "",
    title: "",
    buttonText: "",
  });

  function nameChangeHandler(key, value) {
    console.log("인풋값키", key);
    console.log("인풋값벨류", value);

    setPassbook((prevPassbook) => ({
      ...prevPassbook,
      [key]: value,
    }));
  }

  return (
    <View style={styles.inputOuterContainer}>
      <InputImage />
      <InputForm
        label={"은행명"}
        textChangeHandler={nameChangeHandler}
        key="name"
      />
      <InputForm label={"금액"} textChangeHandler={nameChangeHandler} />
      <InputForm label={"단위"} textChangeHandler={nameChangeHandler} />
      <InputForm label={"타이틀"} textChangeHandler={nameChangeHandler} />
      <InputForm label={"버튼 텍스트"} textChangeHandler={nameChangeHandler} />
    </View>
  );
}

export default InputPassbook;

const styles = StyleSheet.create({
  inputOuterContainer: {
    flex: 1,
  },
});
