import { createContext, useState } from "react";
import { Colors } from "../../constants/colors";


export const BankBooksContext = createContext({
  ids: [],
  addBankBook: (id) => {},
  removeBankBook: (id) => {},
});

export const BottomTabContext = createContext({
  height: 50,
  backgroundColor: Colors.grayComp,
  display: "", // 초기 값 설정
  updateTabBarStyle: (newStyle) => {},
});

function BankBooksContextProvider({ children }) {
  const [bankBookIds, setBankBookIds] = useState([]);
  const [tabBarStyle, setTabBarStyle] = useState({
    height: 50,
    backgroundColor: Colors.grayComp,
    display: "", // 초기 값 설정
  });

  function addBankBook(id) {
    setBankBookIds((currentBkIds) => [...currentBkIds, id]);
  }

  function removeBankBook(id) {
    setBankBookIds((currentBkIds) =>
      currentBkIds.filter((bkIds) => bkIds !== id)
    );
  }

  const value = {
    ids: bankBookIds,
    addBankBook: addBankBook,
    removeBankBook: removeBankBook,
  };

  function updateTabBarStyle(newStyle) {
    setTabBarStyle(newStyle);
  }

  return (
    <BankBooksContext.Provider value={value}>
      <BottomTabContext.Provider value={{ tabBarStyle, updateTabBarStyle }}>
        {children}
      </BottomTabContext.Provider>
    </BankBooksContext.Provider>
  );
}

export default BankBooksContextProvider;
