import { View } from "react-native";
import Input from "./Input";

function InputForm({ label, textChangeHandler, key }) {
  return (
    <View>
      <Input
        label={label}
        textInputConfig={{
          keyboardType: "default",
          onChangeText: (text) => textChangeHandler(key, text),
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
