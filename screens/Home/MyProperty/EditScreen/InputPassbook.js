import { StyleSheet, View } from "react-native";
import InputForm from "../../../../components/Edit/InputForm";
import InputImage from "./InputImage";
import { useState } from "react";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import { Colors } from "../../../../constants/colors";

function InputPassbook({ submitHandler }) {
  const [passbook, setPassbook] = useState({
    name: "",
    amount: "",
    unit: "",
    title: "",
    buttonText: "",
  });

  function nameChangeHandler(column, value) {
    console.log("인풋값키", column);
    console.log("인풋값벨류", value);

    setPassbook((prevPassbook) => ({
      ...prevPassbook,
      [column]: value,
    }));
  }

  return (
    <View style={styles.inputOuterContainer}>
      <InputImage />
      <InputForm
        label={"은행명"}
        textChangeHandler={nameChangeHandler}
        column="name"
      />
      <InputForm
        label={"금액"}
        textChangeHandler={nameChangeHandler}
        column="amount"
      />
      <InputForm
        label={"단위"}
        textChangeHandler={nameChangeHandler}
        column="unit"
      />
      <InputForm
        label={"타이틀"}
        textChangeHandler={nameChangeHandler}
        column="title"
      />
      <InputForm
        label={"버튼 텍스트"}
        textChangeHandler={nameChangeHandler}
        column="buttonText"
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          color={Colors.analyzeButton}
          fontSize={18}
          pageHandler={() => submitHandler(passbook)}
        >
          등록
        </PrimaryButton>
      </View>
    </View>
  );
}

export default InputPassbook;

const styles = StyleSheet.create({
  inputOuterContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    //marginHorizontal: 20,
  },
});
