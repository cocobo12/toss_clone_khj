import { View, Text, StyleSheet, FlatList } from "react-native";
import InputPassbook from "./InputPassbook";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Board from "../../../../components/Board/Board";
import { fetchAllPassbook, insertPassbook } from "../../../../util/database";
import BankBook from "../../../../models/BankBook";

function EditPassbook() {
  const [loadedPassbooks, setLoadedPassbooks] = useState([]);
  const [passbookSubmitted, setPassbookSubmitted] = useState(false); // 추가된 상태
  const [passbookDeleted, setPassbookDeleted] = useState(false); // 추가된 상태

  const isFocused = useIsFocused();
  console.log("useEffect후");
  console.log(isFocused);

  // 계좌 db에 추가
  async function passbookSubmit(passbook) {
    if (passbookSubmitted) {
      return; // 이미 제출된 경우 함수 종료
    }
    console.log("계좌 서밋 데이터 : ", passbook);
    const bankbookItem = new BankBook(
      passbook.name,
      passbook.title,
      passbook.unit,
      passbook.amount,
      passbook.buttonText,
      passbook.image
    );

    // BankBookItem()함수 이용 x 그냥 하드코딩으로 처리

    await insertPassbook(bankbookItem);
    setPassbookSubmitted(true); // 제출 후 상태 변경
  }

  function reloading() {
    setPassbookDeleted(true);
  }

  useEffect(() => {
    async function loadPassbooks() {
      const passbooks = await fetchAllPassbook();
      console.log("db통장 데이터--------------------------");
      console.log(passbooks.rows._array);
      setLoadedPassbooks(passbooks.rows._array);
    }

    if (isFocused) {
      console.log("홈 loadPassbooks");
      loadPassbooks();
      setPassbookSubmitted(false);
      setPassbookDeleted(false);
    }
  }, [isFocused, passbookSubmitted, passbookDeleted]);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "newPassbook":
        return (
          <View style={styles.itemContainer}>
            <InputPassbook
              key={passbookSubmitted ? "submitted" : "new"}
              submitHandler={passbookSubmit}
            />
          </View>
        );

      case "passbookList":
        return (
          <View style={styles.bankContainer}>
            <Board
              type="bankbook"
              items={loadedPassbooks}
              button={false}
              deleteButton={reloading}
            />
          </View>
        );
    }
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={[{ type: "newPassbook" }, { type: "passbookList" }]}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.type + index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default EditPassbook;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 40,
  },
  bankContainer: {
    marginTop: 24,
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
