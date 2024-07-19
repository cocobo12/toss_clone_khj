import * as SQLite from "expo-sqlite/legacy";

const database = SQLite.openDatabase("tossd.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      // 기존 테이블을 삭제하여 초기화
      tx.executeSql(
        `DROP TABLE IF EXISTS passbooks;`,
        [],
        () => {
          // 테이블 삭제 후 새로운 테이블 생성
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS passbooks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              title TEXT,
              subTitle TEXT,
              total TEXT,
              buttonOn TEXT
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
    });
  });

  return promise;
}

export function insertPassbook(passbook) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO passbooks (name, title, subTitle, total, buttonOn) VALUES (?, ?, ?, ?, ?)`,
        [
          passbook.name,
          passbook.title,
          passbook.subTitle,
          passbook.total,
          passbook.buttonOn,
        ],
        (_, result) => {
          console.log(result);
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
        "SELECT * FROM passbooks",
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
