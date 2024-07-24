import { View } from "react-native";
import Input from "./Input";

function InputForm({ label, textChangeHandler, column, value}) {
  console.log("키값 확인", column);
  console.log("인풋폼의 벨류 : ", value);
  return (
    <View>
      <Input
        label={label}
        textInputConfig={{
          keyboardType: "default",
          onChangeText: (text) => textChangeHandler(column, text),
          value: {value}
        }}
      />
      {/*  <Input 
                label="타이틀"
                textInputConfig={{
                    onChangeText: titleChangeHandler,
                }}
            /> 
         */}
    </View>
  );
}

export default InputForm;
