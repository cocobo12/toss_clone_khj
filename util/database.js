import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("tossd.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS passbooks (
           id INTEGER PRIMARY KEY NOT NULL,
           name TEXT NOT NULL,
           title TEXT,
           subTitle TEXT,
           total TEXT,
           buttonOn BOOLEAN
        )`,
        [],
        () => {
          resolve();
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
