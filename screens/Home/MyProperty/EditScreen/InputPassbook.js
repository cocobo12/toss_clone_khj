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
    image: "",
  });

  function valueChangeHandler(column, value) {
    console.log("인풋값키", column);
    console.log("인풋값벨류", value);

    setPassbook((prevPassbook) => ({
      ...prevPassbook,
      [column]: value,
    }));
  }

  // 버튼 누른 후, 입력 데이터 초기화
  // function handleRegister() {
  //   setPassbook({
  //     image: "",
  //     name: "",
  //     amount: "",
  //     unit: "",
  //     title: "",
  //     buttonText: "",
  //   });
  // }

  return (
    <View style={styles.inputOuterContainer}>
      <InputImage column="image" onTakeImage={valueChangeHandler} />
      <InputForm
        label={"은행명"}
        textChangeHandler={valueChangeHandler}
        column="name"
        value={passbook.name}
      />
      <InputForm
        label={"금액"}
        textChangeHandler={valueChangeHandler}
        column="amount"
        value={passbook.amount}
      />
      <InputForm
        label={"단위"}
        textChangeHandler={valueChangeHandler}
        column="unit"
        value={passbook.unit}
      />
      <InputForm
        label={"타이틀"}
        textChangeHandler={valueChangeHandler}
        column="title"
        value={passbook.title}
      />
      <InputForm
        label={"버튼 텍스트"}
        textChangeHandler={valueChangeHandler}
        column="buttonText"
        value={passbook.buttonText}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          color={Colors.analyzeButton}
          fontSize={18}
          pageHandler={() => {
            submitHandler(passbook);
          }}
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
