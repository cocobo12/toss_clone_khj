import { createContext, useState } from "react";

export const BankBooksContext = createContext({
  ids: [],
  addBankBook: (id) => {},
  removeBankBook: (id) => {},
});

function BankBooksContextProvider({ children }) {
  const [bankBookIds, setBankBookIds] = useState([]);

  function addBankBook(id) {
    setBankBookIds((currentBkIds) => [...currentBkIds, id]);
  }

  function removeBankBook() {
    setBankBookIds((currentBkIds) =>
      currentBkIds.filter((bkIds) => bkIds !== id)
    );
  }

  const value = {
    ids: bankBookIds,
    addBankBook: addBankBook,
    removeBankBook: removeBankBook,
  };

  return (
    <BankBooksContext.Provider value={value}>
      {children}
    </BankBooksContext.Provider>
  );
}

export default BankBooksContextProvider;
