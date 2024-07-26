import * as SQLite from "expo-sqlite/legacy";

const database = SQLite.openDatabase("tossd.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      // passbooks 테이블 초기화
      tx.executeSql(
        `DROP TABLE IF EXISTS passbooks;`,
        [],
        () => {
          // passbooks 테이블 생성
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS passbooks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              title TEXT,
              subTitle TEXT,
              total TEXT,
              buttonOn TEXT,
              status VARCHAR(10) DEFAULT 'ACTIVE',
              image TEXT
            );`,
            [],
            () => {
              // cards 테이블 초기화
              tx.executeSql(
                `DROP TABLE IF EXISTS cards;`,
                [],
                () => {
                  // cards 테이블 생성
                  tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS cards (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      name TEXT,
                      title TEXT,
                      cardNumber TEXT,
                      subTitle TEXT,
                      total TEXT,
                      buttonOn TEXT,
                      status VARCHAR(10) DEFAULT 'ACTIVE',
                      image TEXT
                    );`,
                    [],
                    () => {
                      // stocks 테이블 초기화
                      tx.executeSql(
                        `DROP TABLE IF EXISTS stocks;`,
                        [],
                        () => {
                          // stocks 테이블 생성
                          tx.executeSql(
                            `CREATE TABLE IF NOT EXISTS stocks (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              name TEXT,
                              title TEXT,
                              quantity INTEGER,
                              currentPrice REAL,
                              subTitle TEXT,
                              total TEXT,
                              buttonOn TEXT,
                              status VARCHAR(10) DEFAULT 'ACTIVE',
                              image TEXT
                            );`,
                            [],
                            () => {
                              resolve();
                            },
                            (_, error) => {
                              reject(error);
                            }
                          );
                        },
                        (_, error) => {
                          reject(error);
                        }
                      );
                    },
                    (_, error) => {
                      reject(error);
                    }
                  );
                },
                (_, error) => {
                  reject(error);
                }
              );
            },
            (_, error) => {
              reject(error);
            }
          );
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

/* export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      // passbooks 테이블 생성
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS passbooks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          title TEXT,
          subTitle TEXT,
          total TEXT,
          buttonOn TEXT,
          status VARCHAR(10) DEFAULT 'ACTIVE',
          image TEXT
        );`,
        [],
        () => {
          // cards 테이블 생성
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS cards (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT,
              title TEXT,
              cardNumber TEXT,
              subTitle TEXT,
              total TEXT,
              buttonOn TEXT,
              status VARCHAR(10) DEFAULT 'ACTIVE',
              image TEXT
            );`,
            [],
            () => {
              // stocks 테이블 생성
              tx.executeSql(
                `CREATE TABLE IF NOT EXISTS stocks (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT,
                  title TEXT,
                  quantity INTEGER,
                  currentPrice REAL,
                  subTitle TEXT,
                  total TEXT,
                  buttonOn TEXT,
                  status VARCHAR(10) DEFAULT 'ACTIVE',
                  image TEXT
                );`,
                [],
                () => {
                  resolve();
                },
                (_, error) => {
                  reject(error);
                }
              );
            },
            (_, error) => {
              reject(error);
            }
          );
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}
 */


export function insertPassbook(passbook) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO passbooks (name, title, subTitle, total, buttonOn, status, image) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          passbook.name,
          passbook.title,
          passbook.subTitle,
          passbook.total,
          passbook.buttonOn,
          passbook.status || "ACTIVE",
          passbook.image,
        ],
        (_, result) => {
          console.log("insert쿼리 성공", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function deletePassbook(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM passbooks WHERE id = ?`,
        [id],
        (_, result) => {
          console.log("delete 쿼리 성공", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPassbook() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM passbooks WHERE status = 'ACTIVE'",
        [],
        (_, result) => {
          console.log("페치 성공:", result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          console.error("Error fetching passbooks:", error);
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchHidePassbook() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치하이드함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM passbooks WHERE status = 'HIDE'",
        [],
        (_, result) => {
          console.log(result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchAllPassbook() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM passbooks",
        [],
        (_, result) => {
          console.log("페치 성공:", result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          console.error("Error fetching passbooks:", error);
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertCard(card) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO cards (name, title, cardNumber, subTitle, total, buttonOn, status, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          card.name,
          card.title,
          card.cardNumber,
          card.subTitle,
          card.total,
          card.buttonOn,
          card.status || "ACTIVE",
          card.image,
        ],
        (_, result) => {
          console.log("카드 insert쿼리 성공", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function deleteCard(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM cards WHERE id = ?`,
        [id],
        (_, result) => {
          console.log("delete 쿼리 성공", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchCards() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치카드함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cards WHERE status = 'ACTIVE'",
        [],
        (_, result) => {
          console.log("페치 카드 성공:", result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          console.error("Error fetching cards:", error);
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchHideCards() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치하이드함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cards WHERE status = 'HIDE'",
        [],
        (_, result) => {
          console.log(result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchAllCard() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cards",
        [],
        (_, result) => {
          console.log("페치 성공:", result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          console.error("Error fetching cards:", error);
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertStock(stock) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO stocks (name, title, quantity, currentPrice, subTitle, total, buttonOn, status, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          stock.name,
          stock.title,
          stock.quantity,
          stock.currentPrice,
          stock.subTitle,
          stock.total,
          stock.buttonOn,
          stock.status || "ACTIVE",
          stock.image,
        ],
        (_, result) => {
          console.log("주식 insert쿼리 성공", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchStocks() {
  const promise = new Promise((resolve, reject) => {
    console.log("페치주식함수");
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM stocks WHERE status = 'ACTIVE'",
        [],
        (_, result) => {
          console.log("페치 주식 성공:", result);
          console.log(result.rows);
          resolve(result);
        },
        (_, error) => {
          console.error("Error fetching stocks:", error);
          reject(error);
        }
      );
    });
  });

  return promise;
}



