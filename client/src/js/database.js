import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Put content into the database');
  const jateDb = await openDB('jate', 1); // parameters: name of database, version of database
  const transact = jateDb.transaction('jate', 'readwrite'); // params: store name, mode
  const objStore = transact.objectStore('jate'); // returns an IDBObjectStore in the scope of the transaction
  const request = objStore.put({ id: 1, value: content }); // pass the content with an id of 1 into the store using the put method
  const result = await request;
  //console.log('data saved to database: ', result.value) // confirm the request
  console.log('data saved to database: ', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const transact = jateDb.transaction('jate', 'readonly');
  const objStore = transact.objectStore('jate');
  const request = objStore.get(1); // get all values that have an id of 1 from the database
  const result = await request;
  console.log('result.value: ', result.value);
  return result.value;
};

initdb();
