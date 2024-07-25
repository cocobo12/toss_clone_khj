import { StyleSheet, View } from "react-native";
import CardList from "../../components/Cards/CardList";

import { Colors } from "../../constants/colors";

function AllCardInfo({ cards, deleteButton }) {

  const arrow = " 〉";

  return (
    <View style={styles.outerContainer}>
      <CardList cards={cards} deleteButton={deleteButton}/>
    </View>
  );
}

export default AllCardInfo;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    //paddingHorizontal: 5,
  },
  line: {
    borderTopColor: Colors.pressedGray, // 선의 색상
    borderTopWidth: 1, // 선의 두께
    marginHorizontal: 10,
    marginTop: 2, // 선과 버튼 사이의 간격
  },
});
