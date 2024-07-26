import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";

function Input({ label, textInputConfig }) {

    const inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        fontSize: 16,
        color: Colors.accent500,
        marginBottom: 4,
    },
    input: {
        backgroundColor: Colors.accent500,
        color: Colors.brightGray,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
});