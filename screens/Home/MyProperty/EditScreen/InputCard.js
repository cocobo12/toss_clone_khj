import { StyleSheet, View } from "react-native";
import InputForm from "../../../../components/Edit/InputForm";
import InputImage from "./InputImage";
import { useState } from "react";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import { Colors } from "../../../../constants/colors";

function InputCard({ submitHandler }) {
  const [card, setCard] = useState({
    name: "",
    amount: "",
    cardNumber: "",
    title: "",
    buttonText: "",
    image: "",
  });

  function valueChangeHandler(column, value) {
    console.log("인풋값키", column);
    console.log("인풋값벨류", value);

    setCard((prevPassbook) => ({
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
        value={card.name}
      />
      <InputForm
        label={"금액"}
        textChangeHandler={valueChangeHandler}
        column="amount"
        value={card.amount}
      />
      <InputForm
        label={"단위"}
        textChangeHandler={valueChangeHandler}
        column="unit"
        value={card.unit}
      />
      <InputForm
        label={"타이틀"}
        textChangeHandler={valueChangeHandler}
        column="title"
        value={card.title}
      />
      <InputForm
        label={"버튼 텍스트"}
        textChangeHandler={valueChangeHandler}
        column="buttonText"
        value={card.buttonText}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          color={Colors.analyzeButton}
          fontSize={18}
          pageHandler={() => {
            submitHandler(card);
          }}
        >
          등록
        </PrimaryButton>
      </View>
    </View>
  );
}

export default InputCard;

const styles = StyleSheet.create({
  inputOuterContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    //marginHorizontal: 20,
  },
});
