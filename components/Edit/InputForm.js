import { View } from "react-native";
import Input from "./Input";

function InputForm({ label, textChangeHandler, column }) {
  console.log("키값 확인", column);
  return (
    <View>
      <Input
        label={label}
        textInputConfig={{
          keyboardType: "default",
          onChangeText: (text) => textChangeHandler(column, text),
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
