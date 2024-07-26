import { View } from "react-native";
import ImagePicker from "../../../../components/Image/ImagePicker";

function InputImage({ column, onTakeImage }) {
    return(
        <View>
            <ImagePicker column={column} onTakeImage={onTakeImage}/>
        </View>
    );
}

export default InputImage;